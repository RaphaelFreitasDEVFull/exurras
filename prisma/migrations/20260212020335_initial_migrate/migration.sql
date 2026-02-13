-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'OGA', 'SAMBA', 'MEMBER');

-- CreateEnum
CREATE TYPE "Linha" AS ENUM ('OGUM', 'OXOSSI', 'XANGO', 'OXALA', 'IEMANJA', 'OXUM', 'IANSA', 'NANA', 'OMOLU', 'PRETO_VELHO', 'ERE', 'EXU_MIRIM', 'BOIADEIRO', 'CABOCLA', 'MARINHEIRO', 'CIGANO', 'CIGANA', 'BAIANO', 'POMBA_GIRA', 'EXU', 'OUTROS');

-- CreateEnum
CREATE TYPE "PointType" AS ENUM ('ABERTURA', 'CHAMADA', 'FIRMA', 'DEFUMACAO', 'ENCERRAMENTO', 'CURA', 'PROTECAO', 'OUTRO');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'MEMBER',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Point" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT,
    "linha" "Linha" NOT NULL,
    "type" "PointType" NOT NULL DEFAULT 'OUTRO',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdById" TEXT NOT NULL,
    "approved" BOOLEAN NOT NULL DEFAULT false,
    "approvedAt" TIMESTAMP(3),
    "approvedById" TEXT,
    "audioUrl" TEXT,
    "youtubeUrl" TEXT,

    CONSTRAINT "Point_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Section" (
    "id" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "text" TEXT NOT NULL,
    "pointId" TEXT NOT NULL,

    CONSTRAINT "Section_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Beat" (
    "id" TEXT NOT NULL,
    "pattern" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "sectionId" TEXT NOT NULL,

    CONSTRAINT "Beat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SectionAudio" (
    "id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "approved" BOOLEAN NOT NULL DEFAULT false,
    "sectionId" TEXT NOT NULL,
    "uploadedById" TEXT NOT NULL,

    CONSTRAINT "SectionAudio_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Favorite" (
    "userId" TEXT NOT NULL,
    "pointId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Favorite_pkey" PRIMARY KEY ("userId","pointId")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE INDEX "User_email_idx" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Point_slug_key" ON "Point"("slug");

-- CreateIndex
CREATE INDEX "Point_title_idx" ON "Point"("title");

-- CreateIndex
CREATE INDEX "Point_linha_idx" ON "Point"("linha");

-- CreateIndex
CREATE INDEX "Point_type_idx" ON "Point"("type");

-- CreateIndex
CREATE INDEX "Point_approved_idx" ON "Point"("approved");

-- CreateIndex
CREATE INDEX "Section_pointId_idx" ON "Section"("pointId");

-- CreateIndex
CREATE UNIQUE INDEX "Section_pointId_order_key" ON "Section"("pointId", "order");

-- CreateIndex
CREATE UNIQUE INDEX "Beat_sectionId_order_key" ON "Beat"("sectionId", "order");

-- CreateIndex
CREATE INDEX "SectionAudio_sectionId_idx" ON "SectionAudio"("sectionId");

-- CreateIndex
CREATE INDEX "Favorite_pointId_idx" ON "Favorite"("pointId");

-- AddForeignKey
ALTER TABLE "Point" ADD CONSTRAINT "Point_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Point" ADD CONSTRAINT "Point_approvedById_fkey" FOREIGN KEY ("approvedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Section" ADD CONSTRAINT "Section_pointId_fkey" FOREIGN KEY ("pointId") REFERENCES "Point"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Beat" ADD CONSTRAINT "Beat_sectionId_fkey" FOREIGN KEY ("sectionId") REFERENCES "Section"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SectionAudio" ADD CONSTRAINT "SectionAudio_sectionId_fkey" FOREIGN KEY ("sectionId") REFERENCES "Section"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SectionAudio" ADD CONSTRAINT "SectionAudio_uploadedById_fkey" FOREIGN KEY ("uploadedById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Favorite" ADD CONSTRAINT "Favorite_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Favorite" ADD CONSTRAINT "Favorite_pointId_fkey" FOREIGN KEY ("pointId") REFERENCES "Point"("id") ON DELETE CASCADE ON UPDATE CASCADE;
