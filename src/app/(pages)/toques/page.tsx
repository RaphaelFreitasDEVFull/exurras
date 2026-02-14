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

  const session = await auth();
  if (!session?.user) redirect("/login");

  return (
    <DashboardLayout role={session.user.role} username={session.user.username}>
      <div className="p-12 flex flex-col gap-12">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nome do Toque</TableHead>
              <TableHead>Audio</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {toques.map((toque) => (
              <TableRow key={toque.nome}>
                <TableCell>{toque.nome}</TableCell>
                <TableCell>
                  <audio controls>
                    <source src={`/toques/${toque.audio}`} />
                  </audio>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </DashboardLayout>
  );
};

export default Toques;
