import { prisma } from "../../../database/prismaClient";

interface ILevelCreateHandle {
  level: string;
}

export class CreateLevelHandle {
  async execute({ level }: ILevelCreateHandle) {
    const newLevel = await prisma.levels.create({
      data: {
        level: level,
      },
    });
    return newLevel;
  }
}
