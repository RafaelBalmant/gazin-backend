import { Request, Response } from "express";
import { ListDevelopersHandler } from "./listDeveloperHandle";

export class ListDeveloperController {
  async handle(request: Request, response: Response) {
    const listDeveloperHandle = new ListDevelopersHandler();
    const result = await listDeveloperHandle.execute(
      Number(request.query.page),
      Number(request.query.limit)
    );
    return response.json(result);
  }
}
