import { CommonModule, NgOptimizedImage } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { NautilusStore } from "../../../infrastructure/nautilus.store";

@Component({
  selector: "app-nautilus-applications",
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: "./applications.html",
  styles: `
    :host {
      display: block;
      height: 100%;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Applications {
  readonly store = inject(NautilusStore);

  readonly apps = [
    {
      id: "chrome",
      label: "Google Chrome",
      icon: "assets/sidebarIcons/chrome.svg",
      description: "Fast and secure web browser",
    },
    {
      id: "terminal",
      label: "Terminal",
      icon: "assets/sidebarIcons/terminal.svg",
      description: "Command line interface",
    },
    {
      id: "files",
      label: "Files",
      icon: "assets/sidebarIcons/files.svg",
      description: "Access and organize files",
    },
    {
      id: "calc",
      label: "Calculator",
      icon: "assets/sidebarIcons/calculator.svg",
      description: "Perform arithmetic calculations",
    },
    {
      id: "software",
      label: "Ubuntu Software",
      icon: "assets/sidebarIcons/software.svg",
      description: "Install and update software",
    },
    {
      id: "video",
      label: "Video Player",
      icon: "assets/sidebarIcons/video.svg",
      description: "Play and manage videos",
    },
    {
      id: "settings",
      label: "Settings",
      icon: "assets/sidebarIcons/settings.svg",
      description: "Configure system preferences",
    },
  ];
}
