"use client";

import { usePathname, useRouter } from "next/navigation";
import { useActionState, useEffect, useState } from "react";
import { Prisma, Role } from "@/genereted";

import { findPointBySlug } from "./_actions/findPoint";
import { newPointLetter } from "./_actions/newLetterPoint";
import { includeToqueInSection } from "./_actions/includeToqueInSection";

import { OrbitProgress } from "react-loading-indicators";

import { DashboardLayout } from "@/app/_components/dashboardLayout";

import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { YouTubePlayer } from "./_components/youtubeIframe";
import CustomAudioPlayer from "@/app/_components/customAudioPlayer";

type PointWithSections = Prisma.PointGetPayload<{
  include: {
    sections: {
      include: { toque: true };
    };
    createdBy: true;
  };
}>;

type ToquesProps = Prisma.ToqueGetPayload<{
  select: {
    audio: true;
    createdAt: true;
    nome: true;
    id: true;
  };
}>;

const PontoPage = () => {
  const router = useRouter();
  const pathname = usePathname();

  const [point, setPoint] = useState<PointWithSections | null>();
  const [toques, setToques] = useState<ToquesProps[]>([]);
  const [loading, setLoading] = useState(true);

  const [username, setUsername] = useState("Membro");
  const [role, setRole] = useState<Role>("MEMBER");

  const [selectedToque, setSelectedToque] = useState("");

  const [state, formAction] = useActionState(newPointLetter, null);
  const [state2, formAction2] = useActionState(includeToqueInSection, null);

  // Atualiza toque após salvar
  useEffect(() => {
    if (!state2) return;

    setPoint((prev) => {
      if (!prev) return prev;

      return {
        ...prev,
        sections: prev.sections.map((section) =>
          section.id === state2.id
            ? { ...section, toque: state2.toque }
            : section,
        ),
      };
    });
  }, [state2]);

  // Buscar ponto
  useEffect(() => {
    const slug = pathname.split("/").pop();

    async function fetchPoint() {
      const res = await findPointBySlug(slug!);

      if (!res) {
        router.push("/pontos");
        return;
      }

      setPoint(res.point);
      setRole(res.role);
      setToques(res.toques || []);
      setUsername(res.username);

      setLoading(false);
    }

    fetchPoint();
  }, [pathname, router]);

  return (
    <DashboardLayout role={role} username={username}>
      {loading ? (
        <div className="flex w-full min-h-[60vh] items-center justify-center">
          <OrbitProgress color="#ffffff" size="medium" />
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row">
          {/* COLUNA ESQUERDA */}
          <div className="p-4 md:p-8 flex flex-col gap-8 flex-1">
            {/* Header */}
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold">
                {point?.title}
              </h2>

              <span className="text-sm font-light">{point?.author}</span>

              {point?.audioUrl && (
                <audio
                  controls
                  className="w-full rounded-lg shadow-md bg-zinc-900"
                >
                  <source src={point.audioUrl} />
                </audio>
              )}
            </div>

            {/* Letra */}
            {point?.sections.length === 0 && (
              <div className="flex flex-col gap-3">
                <h3 className="text-sm">
                  Inclua a letra do ponto abaixo (separe estrofes com linha em
                  branco)
                </h3>

                <form action={formAction} className="space-y-3">
                  <Textarea name="point" />

                  <Input type="hidden" value={point?.id || ""} name="id" />

                  <Button>Salvar</Button>
                </form>
              </div>
            )}

            {/* Sections */}
            {point?.sections.map((section) => (
              <div key={section.id} className="flex flex-col gap-4">
                {!section.toque && (
                  <form action={formAction2} className="flex gap-2">
                    <Select onValueChange={(v) => setSelectedToque(v)}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Selecionar Toque" />
                      </SelectTrigger>

                      <SelectContent>
                        <SelectGroup>
                          {toques.map((toque) => (
                            <SelectItem value={toque.id} key={toque.id}>
                              {toque.nome}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>

                    <Input type="hidden" name="toque" value={selectedToque} />

                    <Input type="hidden" name="id" value={section.id} />

                    <Button type="submit">Salvar</Button>
                  </form>
                )}

                {section.toque && (
                  <div className="border border-gray-300/20 rounded-xl px-6 py-4 flex flex-col items-center gap-3 bg-muted/30">
                    <h2>Batida da Estrofe — {section.toque.nome}</h2>

                    <CustomAudioPlayer src={`/toques/${section.toque.audio}`} />
                  </div>
                )}

                <span className="whitespace-pre-line">{section.text}</span>
              </div>
            ))}
          </div>

          {/* COLUNA DIREITA */}
          <div className="p-4 md:p-8 lg:w-[420px] w-full flex flex-col gap-6">
            <YouTubePlayer url={point?.youtubeUrl || ""} slug={point?.slug} />

            <div className="border border-gray-400/20 rounded-3xl p-5 flex flex-col gap-4">
              <h3 className="font-semibold">Informações</h3>

              <p className="text-xs font-light">
                Upload por: {point?.createdBy.name}
              </p>

              <p className="text-xs font-light">
                Data:{" "}
                {point?.createdAt &&
                  new Date(point.createdAt).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
};

export default PontoPage;
