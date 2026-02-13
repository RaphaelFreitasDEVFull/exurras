import { DashboardLayout } from "@/app/_components/dashboardLayout";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

const Usuario = async () => {
  const session = await auth();
  if (!session?.user) redirect("/login");
  if (session.user.role !== "ADMIN") redirect("/");

  const users = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      role: true,
      username: true,
    },
  });

  return (
    <DashboardLayout role={session.user.role} username={session.user.username}>
      <div className="p-12 flex flex-col gap-12">
        <div className="flex w-full items-center justify-between">
          <h2 className="text-lg font-semibold">Lista de Usuarios</h2>
          <Button asChild>
            <Link href={"/usuario/novo"}>
              <Plus />
              Adicionar Usuario
            </Link>
          </Button>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Nome</TableHead>
              <TableHead>Usuario</TableHead>
              <TableHead className="text-right">Cargo</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell className="font-medium">{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.username}</TableCell>
                <TableCell className="text-right">{user.role}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </DashboardLayout>
  );
};

export default Usuario;
