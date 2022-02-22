import { hash } from "bcrypt"
import { randomUUID } from "crypto"
import { prisma } from "../../../database/prismaClient"
import { handleErrorMessages } from "../../../helpers/handleErrorMessages"



interface iCreateDeveloperHandle {
  name: string,
  level: string,
  gender: string,
  date: Date,
  age: number,
  hobby: string
}

export class CreateDeveloperHandle {
  async execute({
    name,
    level,
    gender,
    date,
    age,
    hobby
  }: iCreateDeveloperHandle){
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
      const newDeveloper = await prisma.developers.create({
        data: {
          id: randomUUID(),
          name,
          id_level: currentLevel.id,
          gender,
          date: newDate.toISOString(),
          age,
          hobby,
        }
      })
      return newDeveloper;
    }
    catch (err: any) {
      return {
        message: handleErrorMessages[err.message]?.message || err.meta.cause || "internal server error",
        code:  handleErrorMessages[err.message]?.code || 500
      }
    }
  }
}