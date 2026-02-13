import { Music, Plus } from "lucide-react";
import Link from "next/link";
import { DashboardLayout } from "./_components/dashboardLayout";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function HomePage() {
  const session = await auth();
  if (!session?.user) redirect("/login");
  const username = session.user.username;
  const role = session.user.role;

  return (
    <DashboardLayout username={username} role={role}>
      <div className="p-8 flex flex-col gap-8">
        <div className="mb-2">
          <h1 className="mb-2 text-4xl font-bold tracking-tight text-foreground">
            Bem-vindo à Plataforma do Grupo Exurras e Gira do Pai Gustavo
          </h1>
          <p className="text-lg text-muted-foreground">
            Gerencie e organize os pontos sagrados de Umbanda
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Link href="/pontos">
            <div className="group cursor-pointer rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Music className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-card-foreground">
                Ver Pontos
              </h3>
              <p className="text-sm text-muted-foreground">
                Explore a biblioteca completa de pontos da banda
              </p>
            </div>
          </Link>

          <Link href="/pontos/novo">
            <div className="group cursor-pointer rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Plus className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-card-foreground">
                Adicionar Ponto
              </h3>
              <p className="text-sm text-muted-foreground">
                Cadastre um novo ponto com letra, áudio e vídeo
              </p>
            </div>
          </Link>
        </div>

        {/* Container centralizado com largura máxima para a imagem */}
        {/* <div className=" w-full max-w-4xl mx-auto overflow-hidden rounded-lg">
          <div className="relative w-full aspect-video">
            <Image src="/logo.jpg" alt="Ogum" fill className="object-cover" />
          </div>
        </div> */}
      </div>
    </DashboardLayout>
  );
}
