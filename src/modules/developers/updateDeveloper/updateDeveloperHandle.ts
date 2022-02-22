import { randomUUID } from "crypto"
import { prisma } from "../../../database/prismaClient"
import { handleErrorMessages } from "../../../helpers/handleErrorMessages"



interface IUpdateDeveloper {
  id: string,
  name: string,
  level: string,
  gender: string,
  date: Date,
  age: number,
  hobby: string
}

export class UpdateDeveloperHandle {
  async execute({
    id,
    name,
    level,
    gender,
    date,
    age,
    hobby
  }: IUpdateDeveloper){
    try {
      const currentLevel = await prisma.levels.findFirst({
        where: {
          level: {
            equals: level
          }
        }
      })
      if(!currentLevel) {
        throw new Error("Level not found")
      }

      const newDate = new Date(date)

      const updatedDeveloper = await prisma.developers.update({
        where: {
          id: id
        },
        data: {
          name,
          id_level: currentLevel.id,
          gender,
          date: newDate.toISOString(),
          age,
          hobby
        }
      })
      return {
        code: 200,
        message: "Register updated",
        data: updatedDeveloper
      };
    }
    catch (err: any) {
      console.log(err)
      return {
        message: handleErrorMessages[err.message]?.message || err.meta.cause || "internal server error",
        code:  handleErrorMessages[err.message]?.code || 500
      }
    }
  }
}