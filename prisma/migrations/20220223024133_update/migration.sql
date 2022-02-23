/*
  Warnings:

  - The primary key for the `Developers` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Developers` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Levels` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Levels` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the `Users` table. If the table is not empty, all the data it contains will be lost.
  - Changed the type of `id_level` on the `Developers` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "Developers" DROP CONSTRAINT "Developers_id_level_fkey";

-- AlterTable
ALTER TABLE "Developers" DROP CONSTRAINT "Developers_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "id_level",
ADD COLUMN     "id_level" INTEGER NOT NULL,
ADD CONSTRAINT "Developers_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Levels" DROP CONSTRAINT "Levels_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Levels_pkey" PRIMARY KEY ("id");

-- DropTable
DROP TABLE "Users";

-- AddForeignKey
ALTER TABLE "Developers" ADD CONSTRAINT "Developers_id_level_fkey" FOREIGN KEY ("id_level") REFERENCES "Levels"("id") ON DELETE CASCADE ON UPDATE CASCADE;
