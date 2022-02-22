-- DropForeignKey
ALTER TABLE "Developers" DROP CONSTRAINT "Developers_id_level_fkey";

-- AddForeignKey
ALTER TABLE "Developers" ADD CONSTRAINT "Developers_id_level_fkey" FOREIGN KEY ("id_level") REFERENCES "Levels"("id") ON DELETE CASCADE ON UPDATE CASCADE;
