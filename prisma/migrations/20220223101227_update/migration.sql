/*
  Warnings:

  - A unique constraint covering the columns `[id,level]` on the table `Levels` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `name_level` to the `Developers` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Developers" DROP CONSTRAINT "Developers_id_level_fkey";

-- AlterTable
ALTER TABLE "Developers" ADD COLUMN     "name_level" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Levels_id_level_key" ON "Levels"("id", "level");

-- AddForeignKey
ALTER TABLE "Developers" ADD CONSTRAINT "Developers_id_level_name_level_fkey" FOREIGN KEY ("id_level", "name_level") REFERENCES "Levels"("id", "level") ON DELETE CASCADE ON UPDATE CASCADE;
