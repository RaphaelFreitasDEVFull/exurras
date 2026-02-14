import { DashboardLayout } from "@/app/_components/dashboardLayout";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import NewPointForm from "./_components/NewPointForm";

const NovoPonto = async () => {
  const session = await auth();
  if (!session?.user) redirect("/login");

  return (
    <DashboardLayout role={session.user.role} username={session.user.username}>
      <div className="p-12 flex flex-col w-full gap-12">
        <h2 className="text-lg font-semibold">Novo Ponto</h2>
        <NewPointForm />
      </div>
    </DashboardLayout>
  );
};

export default NovoPonto;
