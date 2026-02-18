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
  }, [state?.error]);

  return (
    <div className="flex w-full items-center justify-center h-screen">
      <div className="border border-green-400/30 p-12  w-125 flex flex-col gap-4">
        <h1 className="text-red-600 font-bold text-3xl text-center">Login</h1>
        <form action={formAction} className="flex flex-col gap-3">
          <div className="flex flex-col gap-3">
            <Label>Usuario</Label>
            <Input
              className="bg-transparent w-full p-4 outline-none focus:outline-none"
              name="username"
            />
          </div>
          <div className="flex flex-col gap-3">
            <Label>Senha</Label>
            <Input
              type="password"
              name="password"
              className="bg-transparent w-full p-4 outline-none focus:outline-none"
            />
          </div>
          <Button
            disabled={isPending}
            type="submit"
            variant={"secondary"}
            className="cursor-pointer"
          >
            {" "}
            Entrar{" "}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
