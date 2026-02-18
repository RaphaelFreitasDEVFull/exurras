"use server";

import { signIn } from "@/lib/auth";
import { AuthError } from "next-auth";

export async function loginUser(_: unknown, formData: FormData) {
  try {
    await signIn("credentials", {
      username: formData.get("username") as string,
      password: formData.get("password") as string,
      redirectTo: "/",
    });

    return { success: true };
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Usuário ou senha inválidos" };

        default:
          return { error: "Erro de autenticação" };
      }
    }

    // Se não for AuthError, é erro crítico
    throw error;
  }
}
