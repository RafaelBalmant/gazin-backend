import "express-async-errors";
import express, { NextFunction } from "express";
import { routes } from "./routes";
import { Request, Response } from "express";
import { handleErrorMessages } from "./helpers/handleErrorMessages";

var cors = require("cors");
const app = express();

app.use(cors({ origin: "*" }));

app.use(express.json());

app.use(routes);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof Error) {
      return response.status(handleErrorMessages[err.code]?.code || 500).json({
        message:
          handleErrorMessages[err.code || err.message]?.message ||
          "internal server error",
      });
    }
    return response
      .status(500)
      .json({ status: "error", message: "internal server error" });
  }
);

app.listen(3333, () => console.log("Is Running"));

export default app;
