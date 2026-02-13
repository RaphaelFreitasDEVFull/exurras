import { PrismaClient } from "../../prisma/genereted/client";
import { withAccelerate } from "@prisma/extension-accelerate";

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    accelerateUrl:
      process.env.PRISMA_ACCELERATE_URL ||
      "prisma+postgres://accelerate.prisma-data.net/?api_key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqd3RfaWQiOjEsInNlY3VyZV9rZXkiOiJza19saUdtT0M2Q3Q1My01Q19NRUdmUEQiLCJhcGlfa2V5IjoiMDFLSDdWQlNKNjM1ODZKRDM0SjZFOTZOM0YiLCJ0ZW5hbnRfaWQiOiI4NGQ5NjU0OGZlNjQ3ODBiYjBiN2U2YWEwODU3MWE5MDM1ODJhM2E5NzE3NDMwMGU4ODBiOTRiZWIwM2U5MGQ0IiwiaW50ZXJuYWxfc2VjcmV0IjoiNzY3ODJlZWItOWI3Mi00MTkzLWExMjEtZjFlNDU1ZDAxMGM0In0.Citto4-e_icbfeAehdvGf899eBrHhxBULC6vtkJC-So",
  }).$extends(withAccelerate());

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
