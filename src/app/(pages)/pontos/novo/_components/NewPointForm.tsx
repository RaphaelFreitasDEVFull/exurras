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
import { useActionState, useState } from "react";
import { newPoint } from "../_actions/newPoint";

const NewPointForm = () => {
  const [selectedLinha, setSelectedLinha] = useState("");
  const [fileName, setFileName] = useState("");

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

  const entidades = Object.keys(entidadeLabels);

  const [state, formAction, isPending] = useActionState(newPoint, null);

  return (
    <form action={formAction} className="space-y-8">
      {/* Título */}
      <div className="flex flex-col gap-2">
        <Label htmlFor="title">Título do ponto</Label>
        <Input id="title" name="title" required />
      </div>

      {/* Autor */}
      <div className="flex flex-col gap-2">
        <Label htmlFor="author">Autor(es) (opcional)</Label>
        <Input id="author" name="author" />
      </div>

      {/* Descrição */}
      <div className="flex flex-col gap-2">
        <Label htmlFor="description">Descrição (opcional)</Label>
        <Textarea
          id="description"
          name="description"
          className="resize-none min-h-30"
        />
      </div>

      {/* Linha */}
      <div className="flex flex-col gap-2">
        <Label>Linha do ponto</Label>

        <Select onValueChange={(value) => setSelectedLinha(value)}>
          <SelectTrigger>
            <SelectValue placeholder="Selecione a linha" />
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

        {/* hidden para server action */}
        <input type="hidden" name="point" value={selectedLinha} />
      </div>

      {/* Uploads */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Audio file */}
        <div className="flex flex-col gap-2">
          <Label htmlFor="audio">Áudio do ponto</Label>

          <Input
            id="audio"
            type="file"
            name="audio"
            accept="audio/*"
            onChange={(e) => setFileName(e.target.files?.[0]?.name || "")}
          />

          {fileName && (
            <span className="text-xs text-muted-foreground">
              Arquivo: {fileName}
            </span>
          )}
        </div>

        {/* Link */}
        <div className="flex flex-col gap-2">
          <Label htmlFor="linkAudio">Link YouTube/Drive</Label>

          <Input id="linkAudio" name="linkAudio" placeholder="https://..." />
        </div>
      </div>

      {/* Submit */}
      <Button type="submit" disabled={isPending} className="w-full md:w-auto">
        {isPending ? "Cadastrando..." : "Cadastrar ponto"}
      </Button>
    </form>
  );
};

export default NewPointForm;
