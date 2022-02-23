import { prisma } from "../../../database/prismaClient";
import { handleErrorMessages } from "../../../helpers/handleErrorMessages";

export class ListDevelopersHandler {
  async execute() {
    const developers = await prisma.developers.findMany();
    return {
      code: 200,
      data: developers,
    };
  }
}
