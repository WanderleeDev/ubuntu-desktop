import { ErrorHandler, Injectable, inject } from "@angular/core";
import { toast } from "ngx-sonner";
import { NotificationToast } from "../components/notification-toast/notification-toast";
import { NotificationStore } from "./notification.store";

@Injectable({
  providedIn: "root",
})
export class AppErrorHandler implements ErrorHandler {
  private readonly notificationStore = inject(NotificationStore);

  handleError(error: unknown): void {
    const title = "Application Error";
    let message = "Unknown error";

    if (error instanceof Error) {
      message = error.message;
    } else if (typeof error === "string") {
      message = error;
    } else if (error && typeof error === "object") {
      const errObj = error as Record<string, unknown>;
      if (typeof errObj["message"] === "string") {
        message = errObj["message"];
      } else {
        try {
          message = JSON.stringify(error);
        } catch {
          message = String(error);
        }
      }
    }

    console.error("Caught by Global Error Handler:", error);

    this.notificationStore.addNotification({
      title,
      message,
      type: "error",
      icon: "assets/sidebarIcons/software.svg",
    });

    // 3. Show Custom Toast using ngx-sonner
    toast.custom(NotificationToast, {
      componentProps: {
        title,
        message,
        type: "error",
      },
      duration: 5000,
    });
  }
}
