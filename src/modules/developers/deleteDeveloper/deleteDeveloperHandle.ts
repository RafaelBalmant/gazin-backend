import { randomUUID } from "crypto"
import { prisma } from "../../../database/prismaClient"
import { handleErrorMessages } from "../../../helpers/handleErrorMessages"



interface IDeleteDeveloperHandle {
  id: string,
}

export class DeleteDeveloperHandle {
  async execute({
    id,
  }: IDeleteDeveloperHandle){
    try {
      await prisma.developers.delete({
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