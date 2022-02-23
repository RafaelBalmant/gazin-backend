import { prisma } from "../../../database/prismaClient";

interface IUpdateLevelHandle {
  id: number;
  level: string;
}

export class UpdateLevelHandle {
  async execute({ id, level }: IUpdateLevelHandle) {
    const updatedLevel = await prisma.levels.update({
      where: {
        id: id,
      },
      data: {
        level: level,
      },
    });
    return {
      code: 200,
      message: "Register updated",
      data: updatedLevel,
    };
  }
}
