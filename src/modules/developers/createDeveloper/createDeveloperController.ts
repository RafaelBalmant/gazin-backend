import { Request, Response } from "express";
import { CreateDeveloperHandle } from "./createDeveloperHandle";

export class CreateDeveloperController {
  async handle(request: Request, response: Response) {
    const { name, level, gender, date, age, hobby } = request.body;
    const createDeveloperController = new CreateDeveloperHandle();
    const result = await createDeveloperController.execute({
      name,
      level,
      gender,
      date,
      age,
      hobby,
    });
    return response.json(result);
  }
}
