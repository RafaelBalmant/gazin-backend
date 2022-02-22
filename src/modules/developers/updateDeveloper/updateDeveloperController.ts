import { Request, Response } from "express";
import { UpdateDeveloperHandle } from "./updateDeveloperHandle";

export class UpdateDeveloperController {
  async handle(request: Request, response: Response){
    const {   
      id,
      name,
      level,
      gender,
      date,
      age,
      hobby
    } = request.body;
    const updateDeveloperHandle = new UpdateDeveloperHandle();
    const result = await updateDeveloperHandle.execute({ 
      id,
      name,
      level,
      gender,
      date,
      age,
      hobby
    })
    return response.json(result);
  }
}
