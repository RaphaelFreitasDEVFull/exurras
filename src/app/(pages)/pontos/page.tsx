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
      <div className="flex flex-col gap-12 p-12 ">
        <div className="flex w-full items-center justify-between">
          <h2 className="text-lg font-semibold">Pontos</h2>
          <Button variant={"secondary"} asChild>
            <Link href={"/pontos/novo"}>
              <Plus />
              Adicionar Ponto
            </Link>
          </Button>
        </div>
        <div className="flex flex-col gap-8">
          {lines.map((line) => (
            <div key={line.id} className="flex flex-col gap-4">
              <h2 className="text-3xl font-bold text-red-800 border-b-6 border-red-800 w-fit">
                {line.title}
              </h2>
              <div className="flex gap-3">
                {line.points.map((point) => (
                  <Link
                    href={`/ponto/${point.slug}`}
                    key={point.id}
                    className="p-16 flex flex-col items-center bg-transparent border rounded-4xl w-fit"
                  >
                    <h3 className="text-lg">{point.title}</h3>
                    <h4 className="text-xs">{point.author}</h4>
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
