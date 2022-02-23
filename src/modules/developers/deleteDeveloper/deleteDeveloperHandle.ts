import { prisma } from "../../../database/prismaClient";

interface IDeleteDeveloperHandle {
  id: number;
}

export class DeleteDeveloperHandle {
  async execute({ id }: IDeleteDeveloperHandle) {
    await prisma.developers.delete({
      where: {
        id: Number(id),
      },
    });
    return {
      code: 200,
      message: "Register deleted",
    };
  }
}
