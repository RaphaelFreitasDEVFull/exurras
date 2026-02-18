import { DashboardLayout } from "@/app/_components/dashboardLayout";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import NewPointForm from "./_components/NewPointForm";

const NovoPonto = async () => {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  return (
    <DashboardLayout role={session.user.role} username={session.user.username}>
      <div className="w-full max-w-4xl mx-auto p-4 md:p-8 lg:p-12 flex flex-col gap-8">
        {/* Header */}
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl md:text-3xl font-bold">Novo Ponto</h2>

          <p className="text-sm text-muted-foreground">
            Cadastre um novo ponto com informações completas
          </p>
        </div>

        {/* Form Card */}
        <div className="w-full rounded-2xl border bg-background p-6 md:p-8 shadow-sm">
          <NewPointForm />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default NovoPonto;
