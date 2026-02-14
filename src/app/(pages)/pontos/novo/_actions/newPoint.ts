"use server";

import { prisma } from "@/lib/prisma";
import { Linha } from "../../../../../../prisma/genereted";
import { slugify } from "@/utils/slugify";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export async function newPoint(_: unknown, formData: FormData) {
  const file = formData.get("audio") as File;
  const line = formData.get("point") as string;

  const session = await auth();
  if (!session) return null;
  const id = session.user.id;

  const fd = new FormData();
  fd.append("file", file);

  const res = await fetch("http://localhost:3000/api/upload", {
    method: "POST",
    body: fd,
  });
  const text = await res.text();
  console.log("RAW RESPONSE:", text);

  const data = JSON.parse(text);

  let idLine = "";

  const lineExist = await prisma.lines.findUnique({
    where: {
      slug: line.toLowerCase(),
    },
  });

  if (!lineExist) {
    const res = await prisma.lines.create({
      data: {
        slug: line.toLowerCase(),
        title: line,
      },
    });

    idLine = res.id;
  } else {
    idLine = lineExist.id;
  }

  await prisma.point.create({
    data: {
      linha: line as Linha,
      slug: slugify(formData.get("title") as string),
      title: formData.get("title") as string,
      audioUrl: data.url || "",
      description: (formData.get("description") as string) || "",
      author: (formData.get("author") as string) || "",
      youtubeUrl: (formData.get("linkAudio") as string) || "",
      lineCategoty: idLine,
      createdById: id,
    },
  });

  redirect("/pontos");
}
