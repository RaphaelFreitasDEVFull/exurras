import { prisma } from "@/lib/prisma";

async function main() {
  const toques = [
    { nome: "Barra Vento Dobrado", audio: "/barra-vento-dobrado.mp3" },
    { nome: "Barra Vento", audio: "/barra-vento.mp3" },
    { nome: "Cábula Reto Variação", audio: "/cabula-reto-variacao.mp3" },
    { nome: "Cábula Reto", audio: "/cabula-reto.mp3" },
    { nome: "Ijexá Dobrado", audio: "/ijexa-dobrado.mp3" },
    { nome: "Ijexá Variação", audio: "/ijexa-variacao.mp3" },
    { nome: "Ijexá", audio: "/ijexa.mp3" },
    { nome: "Maculelê", audio: "/maculele.mp3" },
    { nome: "Nagô", audio: "/nago.mp3" },
    { nome: "Pajelança Variação", audio: "/pajelanca-variacao.mp3" },
    { nome: "Pajelança", audio: "/pajelanca.mp3" },
    { nome: "Samba Cábula", audio: "/samba-cabula.mp3" },
  ];

  await prisma.toque.createMany({
    data: toques,
    skipDuplicates: true, // evita duplicar se rodar seed de novo
  });

  console.log("✅ Seed concluído");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
