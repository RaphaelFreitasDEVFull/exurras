"use server";

import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export async function newPointLetter(_: unknown, formData: FormData) {
  const estrofes = separarEstrofes(formData.get("point") as string);

  const point = await prisma.point.findUnique({
    where: {
      id: formData.get("id") as string,
    },
  });

  if (!point) return;

  await prisma.section.createMany({
    data: estrofes.map((estrofe, index) => ({
      text: estrofe,
      order: index + 1,
      pointId: point.id,
    })),
  });

  redirect(`/pontos/${point.slug}`);
}

function separarEstrofes(texto: string) {
  const partes = texto.split(/(\r?\n\r?\n)/);

  const estrofes: string[] = [];
  let atual = "";

  for (const parte of partes) {
    atual += parte;
    if (parte.match(/\r?\n\r?\n/)) {
      estrofes.push(atual);
      atual = "";
    }
  }

  if (atual) estrofes.push(atual);

  return estrofes;
}
