import { prisma } from "../../../database/prismaClient";

interface iCreateDeveloperHandle {
  name: string;
  level: string;
  gender: string;
  date: Date;
  age: number;
  hobby: string;
}

export class CreateDeveloperHandle {
  async execute({
    name,
    level,
    gender,
    date,
    age,
    hobby,
  }: iCreateDeveloperHandle) {
    const currentLevel = await prisma.levels.findFirst({
      where: {
        level: {
          equals: level,
        },
      },
    });
    if (!currentLevel) {
      return throw new Error("Level not found");
    }
    const newDate = new Date(date);
    const newDeveloper = await prisma.developers.create({
      data: {
        name,
        id_level: currentLevel.id,
        name_level: currentLevel.level,
        gender,
        date: newDate.toISOString(),
        age,
        hobby,
      },
    });
    return newDeveloper;
  }
}
