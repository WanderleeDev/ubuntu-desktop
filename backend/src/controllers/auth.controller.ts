import { ZodError } from "zod";
import { loginSchema } from "../schemas/auth.schema";
import { Request, Response } from "express";
import { errorHandler } from "../utils/errorHandler";

export const loginController = async (req: Request, res: Response) => {
  try {
    const result = loginSchema.parse(req.body);
    console.log(result);

    res.send("login success");
  } catch (error) {
    if (error instanceof ZodError) {
      res.status(400).json(errorHandler(error));
    }

    res.status(500).json(errorHandler(error));
  }
};
