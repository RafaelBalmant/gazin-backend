import { Request, Response } from "express";
import { DeleteLevelHandle } from "./deleteLevelHandle";

export class DeleteLevelController {
  async handle(request: Request, response: Response){
    const {   
      id,
    } = request.body;
    const createLevelHandle = new DeleteLevelHandle();
    const result = await createLevelHandle.execute({ 
      id,
    })
    return response.json(result);
  }
}
