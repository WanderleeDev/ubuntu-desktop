import { Router, Request, Response } from "express";
import { loginController } from "../controllers/auth.controller";

const authRouter: Router = Router();

authRouter.post("/login", loginController);

authRouter.get("/:id", (_req: Request, res: Response) => {
  res.json({ message: "project" });
});

export default authRouter;
