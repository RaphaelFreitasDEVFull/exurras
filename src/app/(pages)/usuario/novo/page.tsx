import { DashboardLayout } from "@/app/_components/dashboardLayout";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import NewUserForm from "./_components/newUserForm";

const NewUser = async () => {
  const session = await auth();
  if (!session?.user) redirect("/login");
  if (session.user.role !== "ADMIN") redirect("/");

  return (
    <DashboardLayout role={session.user.role} username={session.user.username}>
      <div className="p-12 flex flex-col gap-12">
        <h2 className="text-lg font-semibold">Adcionar novo usuario</h2>
        <NewUserForm />
      </div>
    </DashboardLayout>
  );
};

export default NewUser;
