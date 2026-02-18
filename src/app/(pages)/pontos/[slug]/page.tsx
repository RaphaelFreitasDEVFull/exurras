"use client";

import { redirect, usePathname } from "next/navigation";
import { useActionState, useEffect, useState } from "react";
import { Prisma, Role } from "@/genereted";
import { findPointBySlug } from "./_actions/findPoint";
import { OrbitProgress } from "react-loading-indicators";
import { DashboardLayout } from "@/app/_components/dashboardLayout";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { newPointLetter } from "./_actions/newLetterPoint";
import { Input } from "@/components/ui/input";
import { YouTubePlayer } from "./_components/youtubeIframe";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { includeToqueInSection } from "./_actions/includeToqueInSection";
import CustomAudioPlayer from "@/app/_components/customAudioPlayer";

type PointWithSections = Prisma.PointGetPayload<{
  include: {
    sections: {
      include: {
        toque: true; // aqui você inclui os audios de cada section
      };
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
  const [point, setPoint] = useState<PointWithSections | null | undefined>();
  const [toques, setToques] = useState<ToquesProps[] | null | undefined>();

  const [loading, setLoading] = useState(false);
  const pathname = usePathname();
  const [username, setUsername] = useState("Membro");
  const [role, setRole] = useState<Role>("MEMBER");
  const [state, formAction, isPending] = useActionState(newPointLetter, null);
  const [state2, formAction2, isPending2] = useActionState(
    includeToqueInSection,
    null,
  );

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
  }, [state2]); // ✅ SOMENTE state2

  const path = pathname.split("/")[2];
  useEffect(() => {
    async function findPoint() {
      setLoading(true);
      const res = await findPointBySlug(path);
      if (!res) {
        redirect("/pontos");
      }
      setPoint(res.point);
      setRole(res.role);
      setToques(res.toques);
      setUsername(res.username);

      setLoading(false);
    }
    findPoint();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <DashboardLayout role={role} username={username}>
        <div>
          <div>
            {loading ? (
              <div className="flex w-full h-screen items-center justify-center">
                <OrbitProgress
                  color="#ffffff"
                  size="medium"
                  text=""
                  textColor=""
                />
              </div>
            ) : (
              <div className="flex ">
                <div className="p-12 flex flex-col gap-12">
                  <div className="flex flex-col gap-2">
                    <h2 className="text-5xl">{point?.title}</h2>
                    <span className="text-sm font-light">{point?.author}</span>

                    {point?.audioUrl?.length !== 0 && (
                      <audio
                        controls
                        className="w-full rounded-lg shadow-md bg-zinc-900"
                      >
                        <source
                          src={
                            point?.audioUrl ||
                            "https://drive.google.com/file/d/19Jq2PMVCIktS8RSBNSkBUWS7sfCLIoaC/view?usp=drive_link"
                          }
                        />
                        Seu navegador não suporta áudio
                      </audio>
                    )}
                  </div>
                  <div>
                    {point?.sections.length === 0 && (
                      <div className="flex flex-col gap-3">
                        <h3 className="text-sm">
                          Inclua a letra do ponto abaixo (separe as estrofes com
                          uma linha em branco)
                        </h3>
                        <form action={formAction} className="space-y-3">
                          <Textarea name="point" />
                          <Input
                            type="hidden"
                            value={point.id || ""}
                            name="id"
                          />
                          <Button>Salvar</Button>
                        </form>
                      </div>
                    )}
                    <div>
                      {point &&
                        point?.sections.length > 0 &&
                        point?.sections.map((section) => (
                          <div key={section.id} className="flex flex-col gap-3">
                            {!section.toque && (
                              <div>
                                <form
                                  action={formAction2}
                                  className="flex gap-2"
                                >
                                  <Select name="toque">
                                    <SelectTrigger className="w-full">
                                      <SelectValue placeholder="Toque" />
                                    </SelectTrigger>
                                    <SelectContent>
                                      <SelectGroup>
                                        {toques?.map((toque) => (
                                          <SelectItem
                                            value={toque.id}
                                            key={toque.id}
                                          >
                                            {toque.nome}
                                          </SelectItem>
                                        ))}
                                      </SelectGroup>
                                    </SelectContent>
                                  </Select>
                                  <Input
                                    type="hidden"
                                    value={section.id}
                                    name="id"
                                  />
                                  <Button type="submit">Salvar</Button>
                                </form>
                              </div>
                            )}
                            <div className="flex flex-col gap-3">
                              {section.toque && (
                                <div className="border border-gray-300/20 w-fit px-6 py-3 gap-3  justify-center flex flex-col items-center">
                                  <h2>
                                    Batida da Estrofe - {section.toque.nome}
                                  </h2>
                                  <CustomAudioPlayer
                                    src={`/toques/${section.toque.audio}`}
                                  />
                                </div>
                              )}
                              <span className="whitespace-pre-line">
                                {section.text}
                              </span>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
                <div className="p-12 w-150 flex flex-col gap-4">
                  <YouTubePlayer
                    url={point?.youtubeUrl || ""}
                    slug={point?.slug}
                  />
                  <div className="border border-gray-400/20 rounded-4xl p-4 flex flex-col gap-5">
                    <h3>Informações</h3>
                    <div>
                      {" "}
                      <p className="text-xs font-light">
                        Realizado upload por:{" "}
                        {point?.createdBy.name?.toString()}
                      </p>
                      <p className="text-xs font-light">
                        Data do upload:{" "}
                        {new Date(
                          point?.createdAt as Date,
                        ).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </DashboardLayout>
    </div>
  );
};

export default PontoPage;
