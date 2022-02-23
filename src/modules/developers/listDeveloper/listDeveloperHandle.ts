import { prisma } from "../../../database/prismaClient";
import { handleErrorMessages } from "../../../helpers/handleErrorMessages";

export class ListDevelopersHandler {
  async execute(reqPage?: number, reqLimit?: number) {
    const page = reqPage || 1;
    const limit = reqLimit || 10;
    const salt = (page - 1) * limit;
    const developers = await prisma.developers.findMany({
      skip: salt,
      take: limit,
    });

    return {
      code: 200,
      data: developers,
    };
  }
}
