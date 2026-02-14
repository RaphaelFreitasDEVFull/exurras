/*
  Warnings:

  - Added the required column `lineCategoty` to the `Point` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Point" ADD COLUMN     "lineCategoty" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Lines" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Lines_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Lines_slug_key" ON "Lines"("slug");

-- AddForeignKey
ALTER TABLE "Point" ADD CONSTRAINT "Point_lineCategoty_fkey" FOREIGN KEY ("lineCategoty") REFERENCES "Lines"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
