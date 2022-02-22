import { Request, Response } from "express";
import { ListDevelopersHandler } from "./listDeveloperHandle";

export class ListDeveloperController {
  async handle(request: Request, response: Response){
    const listDeveloperHandle = new ListDevelopersHandler();
    const result = await listDeveloperHandle.execute()
    return response.json(result);
  }
}
