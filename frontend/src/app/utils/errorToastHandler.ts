import { HttpErrorResponse } from "@angular/common/http";
import { toast } from "ngx-sonner";

export function errorToastHandler(error: unknown, message?: string): void {
  if (error instanceof Error) {
    toast.error(`${message ?? ""} ${error.message}`);
    return;
  }

  toast.error("An error occurred");
}

export function errorHandler(error: unknown): string {
  if (error instanceof HttpErrorResponse) {
    return error.message;
  }

  if (error instanceof Error) {
    return error.message;
  }

  return "An error occurred";
}
