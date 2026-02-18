import { Music, Plus } from "lucide-react";
import Link from "next/link";
import { DashboardLayout } from "./_components/dashboardLayout";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function HomePage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  const username = session.user.username;
  const role = session.user.role;

  return (
    <DashboardLayout username={username} role={role}>
      <div className="w-full max-w-6xl mx-auto p-4 md:p-8 flex flex-col gap-10">
        {/* HEADER */}
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl md:text-4xl font-bold tracking-tight">
            Bem-vindo à Plataforma do Grupo Exurras e Gira do Pai Gustavo
          </h1>

          <p className="text-sm md:text-lg text-muted-foreground max-w-2xl">
            Gerencie e organize os pontos sagrados de Umbanda
          </p>
        </div>

        {/* CARDS */}
        <div className="grid gap-6 sm:grid-cols-2">
          <Link href="/pontos" className="group">
            <div className="h-full cursor-pointer rounded-xl border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Music className="h-6 w-6 text-primary" />
              </div>

              <h3 className="mb-2 text-lg md:text-xl font-semibold">
                Ver Pontos
              </h3>

              <p className="text-sm text-muted-foreground">
                Explore a biblioteca completa de pontos
              </p>
            </div>
          </Link>

          <Link href="/pontos/novo" className="group">
            <div className="h-full cursor-pointer rounded-xl border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Plus className="h-6 w-6 text-primary" />
              </div>

              <h3 className="mb-2 text-lg md:text-xl font-semibold">
                Adicionar Ponto
              </h3>

              <p className="text-sm text-muted-foreground">
                Cadastre ponto com letra, áudio e vídeo
              </p>
            </div>
          </Link>
        </div>
      </div>
    </DashboardLayout>
  );
}
