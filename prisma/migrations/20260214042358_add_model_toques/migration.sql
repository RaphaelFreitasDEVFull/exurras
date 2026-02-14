/*
  Warnings:

  - You are about to drop the column `audio` on the `Beat` table. All the data in the column will be lost.
  - You are about to drop the column `nome` on the `Beat` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[sectionId,order]` on the table `Beat` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `order` to the `Beat` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pattern` to the `Beat` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Beat_sectionId_key";

-- AlterTable
ALTER TABLE "Beat" DROP COLUMN "audio",
DROP COLUMN "nome",
ADD COLUMN     "order" INTEGER NOT NULL,
ADD COLUMN     "pattern" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Toque" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "audio" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Toque_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Beat_sectionId_order_key" ON "Beat"("sectionId", "order");
