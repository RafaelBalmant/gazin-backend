import { prisma } from "../../../database/prismaClient";

interface IDeleteLevelHandle {
  id: number;
}

export class DeleteLevelHandle {
  async execute({ id }: IDeleteLevelHandle) {
    const userHaveThisLevel = await prisma.developers.findFirst({
      where: {
        id_level: {
          equals: id,
        },
      },
    });
    if (userHaveThisLevel) {
      throw new Error("Nivel tem um desenvolvedor vinculado");
    }
    await prisma.levels.delete({
      where: {
        id: id,
      },
    });
    return {
      code: 200,
      message: "Register deleted",
    };
  }
}
