"use server";

import { signIn } from "@/lib/auth";

export async function loginUser(_: unknown, formData: FormData) {
  const login = await signIn("credentials", {
    username: formData.get("username") as string,
    password: formData.get("password") as string,
    redirect: true,
    redirectTo: "/",
  });

  return login;
}
