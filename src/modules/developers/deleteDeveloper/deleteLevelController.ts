import { Request, Response } from "express";
import { DeleteDeveloperHandle } from "./deleteDeveloperHandle";

export class DeleteDeveloperController {
  async handle(request: Request, response: Response){
    const {   
      id,
    } = request.body;
    const deleteDeveloperHandle = new DeleteDeveloperHandle();
    const result = await deleteDeveloperHandle.execute({ 
      id,
    })
    return response.json(result);
  }
}
