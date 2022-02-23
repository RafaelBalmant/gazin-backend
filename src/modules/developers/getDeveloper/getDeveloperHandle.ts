import { prisma } from "../../../database/prismaClient";

interface IGetDeveloperHandle {
  id: number;
}

export class GetDeveloperHandle {
  async execute({ id }: IGetDeveloperHandle) {
    const developer = await prisma.developers.findUnique({
      where: {
        id,
      },
    });
    if (!developer) {
      throw new Error("Level not found");
    }
    return {
      code: 200,
      data: developer,
    };
  }
}
