import { ZodError } from "zod";
import { Errors } from "./Errors.enum";
import { Request, Response } from "express";
import { ErrorResponse } from "../models/ErrorResponse.interface";

export function errorHandler(error: unknown): ErrorResponse {
  if (error instanceof ZodError) {
    return {
      errors: error.issues.map((issue) => ({
        message: issue.message,
      })),
    };
  }

  if (error instanceof Error) {
    return { errors: [{ message: error.message }] };
  }

  return { errors: [{ message: Errors.INTERNAL }] };
}
