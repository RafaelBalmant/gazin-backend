import { randomUUID } from "crypto"
import { prisma } from "../../../database/prismaClient"
import { handleErrorMessages } from "../../../helpers/handleErrorMessages"



interface IUpdateLevelHandle {
  id: string,
  level: string
}

export class UpdateLevelHandle {
  async execute({
    id,
    level
  }: IUpdateLevelHandle){
    try {
      const updatedLevel = await prisma.levels.update({
        where: {
          id: id
        },
        data: {
          level: level
        }
      })
      return {
        code: 200,
        message: "Register updated",
        data: updatedLevel
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