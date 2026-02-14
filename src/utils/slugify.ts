export function slugify(title: string): string {
  return title
    .toLowerCase()
    .normalize("NFD") // separa acentos das letras
    .replace(/[\u0300-\u036f]/g, "") // remove acentos
    .replace(/[^a-z0-9\s-]/g, "") // remove caracteres especiais
    .trim()
    .replace(/\s+/g, "-") // espaços -> hífen
    .replace(/-+/g, "-"); // remove hífens duplicados
}
