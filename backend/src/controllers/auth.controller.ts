import { ZodError } from "zod";
import { loginSchema } from "../schemas/auth.schema";
import { Request, Response } from "express";

export const loginController = async (req: Request, res: Response) => {
  try {
    const result = loginSchema.parse(req.body);
    console.log(result);

    res.send("login success");
  } catch (error) {
    if (error instanceof ZodError) {
      res
        .status(400)
        .json(error.issues.map((issue) => ({ message: issue.message })));

    }
    res.status(500).json({ message: "Internal server error" });
  }
};
