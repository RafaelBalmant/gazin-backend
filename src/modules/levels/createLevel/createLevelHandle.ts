import { randomUUID } from "crypto"
import { prisma } from "../../../database/prismaClient"
import { handleErrorMessages } from "../../../helpers/handleErrorMessages"



interface ILevelCreateHandle {
  level: string,
}

export class CreateLevelHandle {
  async execute({
    level,
  }: ILevelCreateHandle){
    try {
      const newLevel = await prisma.levels.create({
        data: {
          id: randomUUID(), 
          level: level
        }
      })
      return newLevel;
    }
    catch (err: any) {
      return {
        message: handleErrorMessages[err.message]?.message || err.meta.cause || "internal server error",
        code:  handleErrorMessages[err.message]?.code || 500
      }
    }
  }
}