import { Request, Response } from "express";
import { GetDeveloperHandle } from "./getDeveloperHandle";

export class GetDeveloperController {
  async handle(request: Request, response: Response){
    const getDeveloperHandle = new GetDeveloperHandle();
    const id = request.params.id
    const result = await getDeveloperHandle.execute({ id })
    return response.json(result);
  }
}
