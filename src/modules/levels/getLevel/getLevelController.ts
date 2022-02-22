import { Request, Response } from "express";
import { GetLevelHandle } from "./getLevelHandle";

export class GetLevelController {
  async handle(request: Request, response: Response){
    const getLevelHandle = new GetLevelHandle();
    const id = request.params.id
    const result = await getLevelHandle.execute({ id })
    return response.json(result);
  }
}
