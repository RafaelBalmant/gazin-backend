import { prisma } from "../../../database/prismaClient";

export class ListLevelHandle {
  async execute() {
    const levels = await prisma.levels.findMany();
    return {
      code: 200,
      data: levels,
    };
  }
}
