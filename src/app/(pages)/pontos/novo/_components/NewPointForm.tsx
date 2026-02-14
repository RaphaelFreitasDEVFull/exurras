"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useActionState } from "react";
import { newPoint } from "../_actions/newPoint";

const NewPointForm = () => {
  const entidadeLabels: Record<string, string> = {
    OGUM: "Ogum",
    OXOSSI: "Oxóssi",
    XANGO: "Xangô",
    OXALA: "Oxalá",
    IEMANJA: "Iemanjá",
    OXUM: "Oxum",
    IANSA: "Iansã",
    NANA: "Nanã",
    OMOLU: "Omolu",
    PRETO_VELHO: "Preto Velho",
    ERE: "Erê",
    EXU_MIRIM: "Exu Mirim",
    BOIADEIRO: "Boiadeiro",
    CABOCLA: "Cabocla",
    MARINHEIRO: "Marinheiro",
    CIGANO: "Cigano",
    CIGANA: "Cigana",
    BAIANO: "Baiano",
    POMBA_GIRA: "Pomba Gira",
    EXU: "Exu",
    OUTROS: "Outros",
  };
  const entidades = [
    "OGUM",
    "OXOSSI",
    "XANGO",
    "OXALA",
    "IEMANJA",
    "OXUM",
    "IANSA",
    "NANA",
    "OMOLU",
    "PRETO_VELHO",
    "ERE",
    "EXU_MIRIM",
    "BOIADEIRO",
    "CABOCLA",
    "MARINHEIRO",
    "CIGANO",
    "CIGANA",
    "BAIANO",
    "POMBA_GIRA",
    "EXU",
    "OUTROS",
  ] as const;

  const [state, formAction, isPending] = useActionState(newPoint, null);

  return (
    <form action={formAction} className="space-y-6">
      <div className="flex flex-col gap-3">
        <Label>Titulo do ponto</Label>
        <Input name="title" />
      </div>
      <div className="flex flex-col gap-3">
        <Label>Autor(es) do ponto (opicional)</Label>
        <Input name="author" />
      </div>
      <div className="flex flex-col gap-3">
        <Label>Descrição (opcional)</Label>
        <Textarea className="resize-none" name="description" />
      </div>
      <div className="flex flex-col gap-3">
        <Label>Linha do Ponto</Label>
        <Select name="point">
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Linha" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {entidades.map((item) => (
                <SelectItem key={item} value={item}>
                  {entidadeLabels[item]}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="flex flex-col gap-3">
          <Label>Audio do Ponto (opcional)</Label>
          <Input type="file" name="audio" />
        </div>
        <div className="flex flex-col gap-3">
          <Label>Link do Youtube/Google Drive (opcional)</Label>
          <Input name="linkAudio" />
        </div>
      </div>
      <Button type="submit" disabled={isPending}>
        Cadastrar
      </Button>
    </form>
  );
};

export default NewPointForm;
