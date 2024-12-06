import { Router, Request, Response } from "express";

const entryRouter: Router = Router();

entryRouter.get("/", (_req: Request, res: Response) => {
  res.json({ message: "Welcome to the entry point!" });
});

export default entryRouter;
