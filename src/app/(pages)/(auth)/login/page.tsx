"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useActionState, useEffect } from "react";
import { loginUser } from "./_action/login";
import { toast } from "sonner";

const Login = () => {
  const [state, formAction, isPending] = useActionState(loginUser, null);

  useEffect(() => {
    if (state?.error) {
      toast.error(state.error, {
        position: "top-center",
        style: {
          background: "rgba(24,24,27,0.7)",
          backdropFilter: "blur(12px)",
          color: "#fff",
          border: "1px solid rgba(255,255,255,0.2)",
        },
      });
    }
  }, [state]);

  return (
    <div className="flex w-full items-center justify-center min-h-dvh px-4">
      <div className="w-full max-w-md border border-green-400/30 p-8 md:p-12 flex flex-col gap-6 rounded-xl bg-background/50 backdrop-blur">
        <h1 className="text-3xl font-bold text-center">Login</h1>

        <form action={formAction} className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="username">Usuário</Label>
            <Input
              id="username"
              name="username"
              required
              placeholder="Digite seu usuário"
              className="bg-transparent"
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="password">Senha</Label>
            <Input
              id="password"
              name="password"
              type="password"
              required
              placeholder="Digite sua senha"
              className="bg-transparent"
            />
          </div>

          <Button
            disabled={isPending}
            type="submit"
            variant="secondary"
            className="cursor-pointer w-full"
          >
            {isPending ? "Entrando..." : "Entrar"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
