import { Request, Response } from "express";
import { todoSchema, TodoType } from "../schemas/todo.schema";
import { errorHandler } from "../utils/errorHandler";

export const getTodosController = async (req: Request, res: Response) => {
  try {
    // TODO  obtiene las tasks de la DB
    const tasks: TodoType[] = [];
    res.status(200).json({ tasks });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json(errorHandler(error));
    }

    res.status(500).json(errorHandler(error));
  }
};

export const addTodo = async (req: Request, res: Response) => {
  try {
    const todoFormatter = todoSchema.parse(req.body);

    //  TODO recuperar las tasks de la DB
    const newTodo = todoFormatter;

    res.status(200).json({ data: newTodo });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json(errorHandler(error));
    }

    res.status(500).json(errorHandler(error));
  }
};
