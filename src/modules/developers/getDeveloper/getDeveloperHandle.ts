import { prisma } from "../../../database/prismaClient"
import { handleErrorMessages } from "../../../helpers/handleErrorMessages"

interface IGetDeveloperHandle {
  id: string,
}


export class GetDeveloperHandle {
  async execute({ id }: IGetDeveloperHandle){
    try {
      const developer = await prisma.developers.findUnique({
        where: {
          id
        }
      })
      if(!developer) {
        throw new Error("Level not found")
      }
      return {
        code: 200,
        data: developer
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