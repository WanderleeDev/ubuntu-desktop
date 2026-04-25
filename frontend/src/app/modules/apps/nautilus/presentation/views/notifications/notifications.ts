import { DatePipe } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { SwitchComponent } from "../../../../../../shared/components/switch/switch";
import { NotificationStore } from "../../../../../../shared/infrastructure/notification.store";
import { NautilusButton } from "../../components/nautilus-button/nautilus-button";
import { NautilusStore } from "../../../infrastructure/nautilus.store";
import { SettingsStore } from "../../../infrastructure/settings.store";

@Component({
  selector: "app-nautilus-notifications",
  imports: [SwitchComponent, DatePipe, NautilusButton],
  templateUrl: "./notifications.html",
  styles: `
    :host {
      display: block;
      height: 100%;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Notifications {
  protected readonly store = inject(NautilusStore);
  protected readonly settingsStore = inject(SettingsStore);
  protected readonly notificationStore = inject(NotificationStore);

  testNotification(): void {
    // This will trigger the GlobalErrorHandler if we throw a real error,
    // but the user wants a button to "fire" it.
    // Let's throw a real error to see the global handler in action,
    // or just call the store/toast directly for a "test" feel.
    // Actually, throwing a real error is the best way to test the integration.

    const errorMessages = [
      "Network connection lost while fetching updates.",
      "Permission denied: cannot access /root/secret.txt",
      "Memory leak detected in Browser process.",
      "GPU driver crashed but was successfully recovered.",
      "Low disk space: only 500MB remaining on /home.",
    ];

    const randomMessage =
      errorMessages[Math.floor(Math.random() * errorMessages.length)];

    // We use a try-catch to simulate an uncaught error if we want to test the global handler
    // but usually calling it directly or throwing it is fine.
    // Let's throw it!
    throw new Error(randomMessage);
  }

  clearHistory(): void {
    this.notificationStore.clearHistory();
  }
}
