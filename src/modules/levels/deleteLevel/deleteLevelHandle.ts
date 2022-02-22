import { randomUUID } from "crypto"
import { prisma } from "../../../database/prismaClient"
import { handleErrorMessages } from "../../../helpers/handleErrorMessages"



interface IDeleteLevelHandle {
  id: string,
}

export class DeleteLevelHandle {
  async execute({
    id,
  }: IDeleteLevelHandle){
    try {
      const userHaveThisLevel = await prisma.developers.findFirst({
        where: {
          id_level: {
            equals: id,
          }
        }
      })
      if(userHaveThisLevel){
        throw new Error("Level have developer")
      }
      await prisma.levels.delete({
        where: {
          id: id
        }
      })
      return {
        code: 200,
        message: "Register deleted"
      };
    }
    catch (err: any) {
      console.log(err.meta.cause)
      return {
        message: handleErrorMessages[err.message]?.message || err.meta.cause || "internal server error",
        code:  handleErrorMessages[err.message]?.code || 500
      }
    }
  }
}