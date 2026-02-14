"use server";

import { prisma } from "@/lib/prisma";
import { hashSync } from "bcrypt-ts";
import { Role } from "@/genereted";
import { redirect } from "next/navigation";

export async function newUser(_: unknown, formData: FormData) {
  await prisma.user.create({
    data: {
      password: hashSync("exurras2026"),
      name: formData.get("name") as string,
      username: formData.get("username") as string,
      role: formData.get("role") as Role,
    },
  });

  redirect("/usuario");
}
