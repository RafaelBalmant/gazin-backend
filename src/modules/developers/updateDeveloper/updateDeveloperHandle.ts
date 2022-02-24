import { prisma } from "../../../database/prismaClient";

interface IUpdateDeveloper {
  id: number;
  name: string;
  level: string;
  gender: string;
  date: Date;
  age: number;
  hobby: string;
}

export class UpdateDeveloperHandle {
  async execute({
    id,
    name,
    level,
    gender,
    date,
    age,
    hobby,
  }: IUpdateDeveloper) {
    const currentLevel = await prisma.levels.findFirst({
      where: {
        level: {
          equals: level,
        },
      },
    });
    if (!currentLevel) {
      throw new Error("Level not found");
    }

    const newDate = new Date(date);

    const updatedDeveloper = await prisma.developers.update({
      where: {
        id: id,
      },
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
    return {
      code: 200,
      message: "Register updated",
      data: updatedDeveloper,
    };
  }
}
