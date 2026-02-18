import { DashboardLayout } from "@/app/_components/dashboardLayout";
import { Button } from "@/components/ui/button";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { Plus } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

const PontoPage = async () => {
  const session = await auth();
  if (!session?.user) redirect("/login");

  const lines = await prisma.lines.findMany({
    include: {
      points: true,
    },
    orderBy: {
      title: "asc",
    },
  });

  return (
    <DashboardLayout role={session.user.role} username={session.user.username}>
      <div className="flex flex-col gap-10 p-4 md:p-8 lg:p-12 max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="flex flex-col sm:flex-row w-full sm:items-center justify-between gap-4">
          <h2 className="text-2xl font-semibold">Pontos</h2>

          <Button variant="secondary" asChild>
            <Link href="/pontos/novo" className="flex items-center gap-2">
              <Plus size={18} />
              Adicionar Ponto
            </Link>
          </Button>
        </div>

        {/* Empty global */}
        {lines.length === 0 && (
          <div className="text-center text-muted-foreground py-20">
            Nenhuma linha cadastrada ainda.
          </div>
        )}

        {/* Lines */}
        <div className="flex flex-col gap-12">
          {lines.map((line) => (
            <div key={line.id} className="flex flex-col gap-6">
              {/* Title */}
              <h2 className="text-2xl md:text-3xl font-bold border-b-2 border-primary w-fit pb-1">
                {line.title}
              </h2>

              {/* Empty line */}
              {line.points.length === 0 && (
                <p className="text-muted-foreground">
                  Nenhum ponto nessa linha ainda.
                </p>
              )}

              {/* Grid */}
              <div
                className="
                grid 
                grid-cols-1 
                sm:grid-cols-2 
                md:grid-cols-3 
                xl:grid-cols-4 
                gap-5
              "
              >
                {line.points.map((point) => (
                  <Link
                    href={`/pontos/${point.slug}`}
                    key={point.id}
                    className="
                      p-6
                      flex flex-col 
                      items-center 
                      justify-center
                      text-center
                      border 
                      rounded-2xl
                      bg-background
                      hover:bg-muted
                      hover:shadow-md
                      hover:scale-[1.02]
                      transition-all
                      min-h-[120px]
                    "
                  >
                    <h3 className="text-base md:text-lg font-medium">
                      {point.title}
                    </h3>

                    {point.author && (
                      <h4 className="text-xs text-muted-foreground mt-1">
                        {point.author}
                      </h4>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default PontoPage;
