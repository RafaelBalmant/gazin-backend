import { prisma } from "../../../database/prismaClient";

export class ListLevelHandle {
  async execute(reqPage?: number, reqLimit?: number) {
    const page = reqPage || 1;
    const limit = reqLimit || 10;
    const salt = (page - 1) * limit;

    const levels = await prisma.levels.findMany({
      skip: salt,
      take: limit,
    });
    return {
      code: 200,
      data: levels,
    };
  }
}
