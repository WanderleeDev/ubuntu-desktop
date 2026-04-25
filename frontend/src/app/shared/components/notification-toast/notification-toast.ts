import { ChangeDetectionStrategy, Component, input } from "@angular/core";

@Component({
  selector: "app-notification-toast",
  imports: [],
  templateUrl: "./notification-toast.html",
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationToast {
  title = input.required<string>();
  message = input.required<string>();
  type = input<"error" | "info" | "warning" | "success">("info");
}
