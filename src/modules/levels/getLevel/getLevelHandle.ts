import { prisma } from "../../../database/prismaClient"
import { handleErrorMessages } from "../../../helpers/handleErrorMessages"

interface IGetLevelHandle {
  id: string,
}


export class GetLevelHandle {
  async execute({ id }: IGetLevelHandle){
    try {
      const level = await prisma.levels.findUnique({
        where: {
          id
        }
      })
      if(!level) {
        throw new Error("Level not found")
      }
      return {
        code: 200,
        data: level
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