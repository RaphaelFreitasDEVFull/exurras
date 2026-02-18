"use server";

import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export const updateYoutubeLink = async (_: unknown, formData: FormData) => {
  const slug = formData.get("slug") as string;

  const existing = await prisma.point.findUnique({
    where: { slug },
  });
  if (existing) {
    await prisma.point.update({
      where: {
        slug,
      },
      data: {
        youtubeUrl: formData.get("link") as string,
      },
    });

    redirect(`${process.env.PROJECT_URL}/pontos/${slug}`);
  }
};
