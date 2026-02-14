/*
  Warnings:

  - You are about to drop the column `order` on the `Beat` table. All the data in the column will be lost.
  - You are about to drop the column `pattern` on the `Beat` table. All the data in the column will be lost.
  - You are about to drop the `SectionAudio` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[sectionId]` on the table `Beat` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `audio` to the `Beat` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nome` to the `Beat` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "SectionAudio" DROP CONSTRAINT "SectionAudio_sectionId_fkey";

-- DropForeignKey
ALTER TABLE "SectionAudio" DROP CONSTRAINT "SectionAudio_uploadedById_fkey";

-- DropIndex
DROP INDEX "Beat_sectionId_order_key";

-- AlterTable
ALTER TABLE "Beat" DROP COLUMN "order",
DROP COLUMN "pattern",
ADD COLUMN     "audio" TEXT NOT NULL,
ADD COLUMN     "nome" TEXT NOT NULL;

-- DropTable
DROP TABLE "SectionAudio";

-- CreateIndex
CREATE UNIQUE INDEX "Beat_sectionId_key" ON "Beat"("sectionId");
