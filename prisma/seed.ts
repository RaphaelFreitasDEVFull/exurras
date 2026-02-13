import { prisma } from "@/lib/prisma";
import { Role } from "./genereted/client";
import { hashSync } from "bcrypt-ts";

async function main() {
  const username = "admin";

  const existing = await prisma.user.findUnique({
    where: { username },
  });

  if (existing) {
    console.log("Usuário admin já existe");
    return;
  }

  const hashedPassword = await hashSync("32381878");

  const user = await prisma.user.create({
    data: {
      name: "Raphael SIlva Freitas",
      username: "admin",
      password: hashedPassword,
      role: Role.ADMIN, // ou MEMBER se não tiver ADMIN
    },
  });

  console.log("Usuário criado:", user.username);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
