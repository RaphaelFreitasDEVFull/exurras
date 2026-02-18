import { DashboardLayout } from "@/app/_components/dashboardLayout";
import { auth } from "@/lib/auth";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { redirect } from "next/navigation";

const Toques = async () => {
  const toques = [
    { nome: "Barra Vento Dobrado", audio: "barra-vento-dobrado.mp3" },
    { nome: "Barra Vento", audio: "barra-vento.mp3" },
    { nome: "Cábula Reto Variação", audio: "cabula-reto-variacao.mp3" },
    { nome: "Cábula Reto", audio: "cabula-reto.mp3" },
    { nome: "Ijexá Dobrado", audio: "ijexa-dobrado.mp3" },
    { nome: "Ijexá Variação", audio: "ijexa-variacao.mp3" },
    { nome: "Ijexá", audio: "ijexa.mp3" },
    { nome: "Maculelê", audio: "maculele.mp3" },
    { nome: "Nagô", audio: "nago.mp3" },
    { nome: "Pajelança Variação", audio: "pajelanca-variacao.mp3" },
    { nome: "Pajelança", audio: "pajelanca.mp3" },
    { nome: "Samba Cábula", audio: "samba-cabula.mp3" },
  ];

  const session = await auth();
  if (!session?.user) redirect("/login");

  return (
    <DashboardLayout role={session.user.role} username={session.user.username}>
      <div className="p-4 md:p-8 lg:p-12 flex flex-col gap-8 max-w-6xl mx-auto w-full">
        <h1 className="text-2xl font-semibold">Toques</h1>

        {toques.length === 0 ? (
          <div className="text-center py-20 text-muted-foreground">
            Nenhum toque disponível.
          </div>
        ) : (
          <div className="rounded-xl border overflow-x-auto">
            <Table className="min-w-[600px]">
              <TableHeader>
                <TableRow>
                  <TableHead>Nome do Toque</TableHead>
                  <TableHead className="w-[300px]">Áudio</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {toques.map((toque) => (
                  <TableRow key={toque.nome}>
                    <TableCell className="font-medium">{toque.nome}</TableCell>

                    <TableCell>
                      <audio
                        controls
                        className="w-full max-w-[260px]"
                        preload="none"
                      >
                        <source src={`/toques/${toque.audio}`} />
                      </audio>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default Toques;
