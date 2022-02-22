-- CreateTable
CREATE TABLE "Levels" (
    "id" TEXT NOT NULL,
    "level" TEXT NOT NULL,

    CONSTRAINT "Levels_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Developers" (
    "id" TEXT NOT NULL,
    "id_level" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "age" INTEGER NOT NULL,
    "hobby" TEXT NOT NULL,

    CONSTRAINT "Developers_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Developers" ADD CONSTRAINT "Developers_id_level_fkey" FOREIGN KEY ("id_level") REFERENCES "Levels"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
