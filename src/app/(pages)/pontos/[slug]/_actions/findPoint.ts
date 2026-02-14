"use server";

import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export async function findPointBySlug(slug: string | null) {
  if (slug === null) return;
  const user = await auth();
  if (!user) {
    redirect("/pontos");
  }
  const res = await prisma.point.findUnique({
    where: { slug },
    include: {
      sections: {
        include: {
          toque: true,
        },
      },
      createdBy: true,
    },
  });

  const toques = await prisma.toque.findMany();

  return {
    point: res,
    toques,
    username: user.user.username,
    role: user.user.role,
  };
}
