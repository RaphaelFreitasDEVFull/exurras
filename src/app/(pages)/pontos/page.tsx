import { prisma } from "@/lib/prisma";
import PontosClient from "./PontosClient";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

const PontoPage = async () => {
  const session = await auth();

  if (!session) redirect("/login");

  const lines = await prisma.lines.findMany({
    include: {
      points: true,
    },
    orderBy: {
      title: "asc",
    },
  });

  return (
    <PontosClient
      lines={lines}
      username={session.user.username}
      role={session.user.role}
    />
  );
};

export default PontoPage;
