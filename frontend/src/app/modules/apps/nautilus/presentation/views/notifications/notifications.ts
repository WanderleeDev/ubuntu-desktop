import { DatePipe } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { SwitchComponent } from "../../../../../../shared/components/switch/switch";
import { NotificationStore } from "../../../../../../shared/infrastructure/notification.store";
import { NautilusStore } from "../../../infrastructure/nautilus.store";
import { SettingsStore } from "../../../infrastructure/settings.store";
import { NautilusButton } from "../../components/nautilus-button/nautilus-button";

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
    const errorMessages = [
      "[Test Error] Network connection lost while fetching updates.",
      "[Test Error] Permission denied: cannot access /root/secret.txt",
      "[Test Error] Memory leak detected in Browser process.",
      "[Test Error] GPU driver crashed but was successfully recovered.",
      "[Test Error] Low disk space: only 500MB remaining on /home.",
    ];

    const randomMessage =
      errorMessages[Math.floor(Math.random() * errorMessages.length)];
    throw new Error(randomMessage);
  }

  clearHistory(): void {
    this.notificationStore.clearHistory();
  }
}
