/*
  Warnings:

  - You are about to drop the `Beat` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Beat" DROP CONSTRAINT "Beat_sectionId_fkey";

-- AlterTable
ALTER TABLE "Section" ADD COLUMN     "toqueId" TEXT;

-- DropTable
DROP TABLE "Beat";

-- AddForeignKey
ALTER TABLE "Section" ADD CONSTRAINT "Section_toqueId_fkey" FOREIGN KEY ("toqueId") REFERENCES "Toque"("id") ON DELETE CASCADE ON UPDATE CASCADE;
