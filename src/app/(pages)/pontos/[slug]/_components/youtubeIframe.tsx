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

  if (!embedUrl && !showForm) {
    return (
      <Button variant="outline" onClick={() => setShowForm(true)}>
        <Plus /> Cadastrar Vídeo
      </Button>
    );
  }

  if (!embedUrl && showForm) {
    return (
      <form action={formAction} className="flex gap-2">
        <Label>Link do vídeo</Label>
        <Input name="link" placeholder="URL do YouTube" />
        <Input name="slug" type="hidden" value={slug} />
        <Button type="submit" disabled={isPending}>
          <Save />
        </Button>
      </form>
    );
  }

  return (
    <div className="w-full aspect-video">
      <iframe
        className="w-full h-full rounded-lg"
        src={embedUrl!}
        title="YouTube video"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
