import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { NautilusStore } from "../../../infrastructure/nautilus.store";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-nautilus-privacy",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./privacy.component.html",
  styles: `
    :host {
      display: block;
      height: 100%;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrivacyComponent {
  readonly store = inject(NautilusStore);

  readonly privacySettings = [
    { id: 'connectivity', label: 'Connectivity', icon: 'wifi_tethering', description: 'Network connectivity and status' },
    { id: 'location', label: 'Location Services', icon: 'location_on', description: 'Allow apps to determine your location' },
    { id: 'camera', label: 'Camera', icon: 'videocam', description: 'Control which apps can use the camera' },
    { id: 'microphone', label: 'Microphone', icon: 'mic', description: 'Manage microphone access for applications' },
    { id: 'thunderbolt', label: 'Thunderbolt', icon: 'bolt', description: 'Manage Thunderbolt devices and security' },
    { id: 'history', label: 'File History & Trash', icon: 'history', description: 'Manage file usage history and trash settings' },
    { id: 'screen-lock', label: 'Screen Lock', icon: 'screen_lock_portrait', description: 'Configure screen locking behavior' },
    { id: 'diagnostics', label: 'Diagnostics', icon: 'analytics', description: 'Usage and error report settings' },
  ];
}
