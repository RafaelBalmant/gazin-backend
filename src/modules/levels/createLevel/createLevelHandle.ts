import { prisma } from "../../../database/prismaClient";

interface ILevelCreateHandle {
  level: string;
}

export class CreateLevelHandle {
  async execute({ level }: ILevelCreateHandle) {
    const currentLevel = await prisma.levels.findFirst({
      where: {
        level: {
          equals: level,
        },
      },
    });

    if (currentLevel) {
      throw new Error("Level exist");
    }
    const newLevel = await prisma.levels.create({
      data: {
        level: level,
      },
    });
    return newLevel;
  }
}
