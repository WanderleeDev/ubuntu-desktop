import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { NautilusStore } from "../../../infrastructure/nautilus.store";
import { CommonModule, NgOptimizedImage } from "@angular/common";

@Component({
  selector: "app-nautilus-applications",
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: "./applications.component.html",
  styles: `
    :host {
      display: block;
      height: 100%;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApplicationsComponent {
  readonly store = inject(NautilusStore);

  readonly apps = [
    { id: 'firefox', label: 'Firefox Web Browser', icon: 'assets/sidebarIcons/firefox.svg', description: 'Safe and easy web browsing' },
    { id: 'terminal', label: 'Terminal', icon: 'assets/sidebarIcons/terminal.svg', description: 'Command line interface' },
    { id: 'files', label: 'Files', icon: 'assets/sidebarIcons/files.svg', description: 'Access and organize files' },
    { id: 'calc', label: 'Calculator', icon: 'assets/sidebarIcons/calculator.svg', description: 'Perform arithmetic calculations' },
    { id: 'software', label: 'Ubuntu Software', icon: 'assets/sidebarIcons/software.svg', description: 'Install and update software' },
    { id: 'video', label: 'Video Player', icon: 'assets/sidebarIcons/video.svg', description: 'Play and manage videos' },
    { id: 'settings', label: 'Settings', icon: 'assets/sidebarIcons/settings.svg', description: 'Configure system preferences' },
  ];
}
