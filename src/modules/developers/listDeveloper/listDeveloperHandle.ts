import { prisma } from "../../../database/prismaClient"
import { handleErrorMessages } from "../../../helpers/handleErrorMessages"




export class ListDevelopersHandler {
  async execute(){
    try {
      const developers = await prisma.levels.findMany()
      return {
        code: 200,
        data: developers
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