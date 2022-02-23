import { prisma } from "../../../database/prismaClient";

interface IGetLevelHandle {
  id: number;
}

export class GetLevelHandle {
  async execute({ id }: IGetLevelHandle) {
    const level = await prisma.levels.findUnique({
      where: {
        id,
      },
    });
    if (!level) {
      throw new Error("Level not found");
    }
    return {
      code: 200,
      data: level,
    };
  }
}
