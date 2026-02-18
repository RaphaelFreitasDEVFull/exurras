"use client";

import { Button } from "@/components/ui/button";
import { getYouTubeEmbedUrl } from "../_actions/youtubeVideo";
import { Plus, Save } from "lucide-react";
import { useActionState, useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { updateYoutubeLink } from "../_actions/updateYoutubeUrl";

interface Props {
  url: string;
  slug?: string;
}

export function YouTubePlayer({ url, slug }: Props) {
  const embedUrl = getYouTubeEmbedUrl(url);

  const [showForm, setShowForm] = useState(false);

  const [, formAction, isPending] = useActionState(updateYoutubeLink, null);

  // 👉 Sem vídeo e sem formulário
  if (!embedUrl && !showForm) {
    return (
      <Button variant="outline" type="button" onClick={() => setShowForm(true)}>
        <Plus className="mr-2 h-4 w-4" />
        Cadastrar Vídeo
      </Button>
    );
  }

  // 👉 Sem vídeo mas formulário aberto
  if (!embedUrl && showForm) {
    return (
      <form action={formAction} className="flex items-end gap-2">
        <div className="flex flex-col gap-1">
          <Label>Link do vídeo</Label>
          <Input name="link" placeholder="URL do YouTube" required />
        </div>

        <Input name="slug" type="hidden" value={slug} />

        <Button type="submit" disabled={isPending}>
          <Save className="h-4 w-4" />
        </Button>
      </form>
    );
  }

  // 👉 Vídeo existente
  return (
    <div className="w-full aspect-video">
      <iframe
        className="w-full h-full rounded-lg"
        src={embedUrl!}
        title="YouTube video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </div>
  );
}
