/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Developers` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[level]` on the table `Levels` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Developers_name_key" ON "Developers"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Levels_level_key" ON "Levels"("level");
