import { Request, Response } from "express";
import { CreateLevelHandle } from "./createLevelHandle";

export class CreateLevelController {
  async handle(request: Request, response: Response){
    const {   
      level,
    } = request.body;
    const createLevelHandle = new CreateLevelHandle();
    const result = await createLevelHandle.execute({ 
      level,
    })
    return response.json(result);
  }
}
