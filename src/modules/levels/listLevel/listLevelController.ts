import { Request, Response } from "express";
import { ListLevelHandle } from "./listLevelHandle";

export class ListLevelController {
  async handle(request: Request, response: Response){
    const createLevelHandle = new ListLevelHandle();
    const result = await createLevelHandle.execute()
    return response.json(result);
  }
}
