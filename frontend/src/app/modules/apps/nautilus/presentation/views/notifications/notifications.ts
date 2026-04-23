import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { NautilusStore } from "../../../infrastructure/nautilus.store";
import { CommonModule, NgOptimizedImage } from "@angular/common";

@Component({
  selector: "app-nautilus-notifications",
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
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
  readonly store = inject(NautilusStore);

  readonly appNotifications = [
    { id: 'firefox', label: 'Firefox', icon: 'assets/sidebarIcons/firefox.svg', enabled: true },
    { id: 'thunderbird', label: 'Thunderbird', icon: 'assets/sidebarIcons/thunderbird.svg', enabled: true },
    { id: 'calendar', label: 'Calendar', icon: 'assets/sidebarIcons/calendar.svg', enabled: false },
    { id: 'terminal', label: 'Terminal', icon: 'assets/sidebarIcons/terminal.svg', enabled: true },
    { id: 'files', label: 'Files', icon: 'assets/sidebarIcons/files.svg', enabled: true },
    { id: 'software', label: 'Software Updater', icon: 'assets/sidebarIcons/software.svg', enabled: true },
  ];
}
