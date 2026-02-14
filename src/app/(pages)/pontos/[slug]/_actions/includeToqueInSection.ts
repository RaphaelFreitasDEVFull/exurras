"use server";

import { prisma } from "@/lib/prisma";

export async function includeToqueInSection(_: unknown, formData: FormData) {
  const id = formData.get("id") as string;

  await prisma.section.update({
    where: { id },
    data: {
      toqueId: formData.get("toque") as string,
    },
  });
}
