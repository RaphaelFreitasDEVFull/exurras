"use server";

import { prisma } from "@/lib/prisma";

export async function includeToqueInSection(_: unknown, formData: FormData) {
  const sectionId = formData.get("id") as string;
  const toqueId = formData.get("toque") as string;

  const updated = await prisma.section.update({
    where: { id: sectionId },
    data: { toqueId },
    include: { toque: true },
  });

  return updated; // <-- importante
}
