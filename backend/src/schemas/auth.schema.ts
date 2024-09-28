import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().min(1, "Email is required").email("Email is invalid"),
  password: z
    .string()
    .min(1, "Password is required")
    .max(14, "Password must be 14 characters or less")
    .regex(/^[a-zA-Z0-9]+$/, "Password must contain only letters and numbers"),
});

export type LoginType =z.infer<typeof loginSchema>;
