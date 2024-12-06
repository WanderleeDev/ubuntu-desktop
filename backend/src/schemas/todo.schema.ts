import { z } from "zod";

export const todoSchema = z.object({
  task: z
    .string()
    .min(5, "Task is required minimum 5 characters")
    .regex(/^[a-zA-Z0-9]+$/, "Task must contain only letters and numbers"),
  status: z.enum(["pending", "completed"]),
});

export type TodoType = z.infer<typeof todoSchema>;
export type TodoBase = Omit<TodoType, "id">;
