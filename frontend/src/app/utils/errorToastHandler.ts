import { toast } from "ngx-sonner";

export function errorToastHandler(error: unknown, message?: string): void {
  if (error instanceof Error) {
    toast.error(`${message ?? ""} ${error.message}`);
    return;
  }

  toast.error("An error occurred");
}
