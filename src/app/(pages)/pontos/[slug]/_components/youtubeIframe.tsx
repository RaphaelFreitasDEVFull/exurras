import { getYouTubeEmbedUrl } from "../_actions/youtubeVideo";

interface Props {
  url: string;
}

export function YouTubePlayer({ url }: Props) {
  const embedUrl = getYouTubeEmbedUrl(url);

  if (!embedUrl) return <p>Sem video cadastrado</p>;

  return (
    <div className="w-full aspect-video">
      <iframe
        className="w-full h-full rounded-lg "
        src={embedUrl}
        title="YouTube video"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
