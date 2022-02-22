import { Request, Response } from "express";
import { UpdateLevelHandle } from "./updateLevelHandle";

export class UpdateLevelController {
  async handle(request: Request, response: Response){
    const {   
      id,
      level
    } = request.body;
    const createLevelHandle = new UpdateLevelHandle();
    const result = await createLevelHandle.execute({ 
      id,
      level
    })
    return response.json(result);
  }
}
