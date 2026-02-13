"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useActionState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { newUser } from "../_actions/newUser";

const NewUserForm = () => {
  const [state, formAction, isPending] = useActionState(newUser, null);

  return (
    <form action={formAction} className="space-y-6">
      <div className="flex flex-col gap-2">
        <Label>Nome</Label>
        <Input name="name" />
      </div>
      <div className="flex flex-col gap-2">
        <Label>Nome de usuario</Label>
        <Input name="username" />
      </div>
      <div className="flex flex-col gap-2">
        <Label>Cargo</Label>
        <Select name="role">
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Cargo" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="ADMIN">Administrador</SelectItem>
              <SelectItem value="OGÃ">Ogã</SelectItem>
              <SelectItem value="SAMBA">Samba</SelectItem>
              <SelectItem value="MEMBER">Engoma</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <Button type="submit" variant={"secondary"} disabled={isPending}>
        Adicionar
      </Button>
    </form>
  );
};

export default NewUserForm;
