export function getYouTubeEmbedUrl(url: string) {
  const regex = /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/;
  const match = url.match(regex);

  if (!match) return null;

  return `https://www.youtube.com/embed/${match[1]}`;
}
