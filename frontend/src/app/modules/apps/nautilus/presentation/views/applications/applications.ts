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
      id: "files",
      label: "Files",
      icon: "assets/sidebarIcons/folder.svg",
      description: "Access and organize files",
    },
    {
      id: "calc",
      label: "Calculator",
      icon: "assets/desktopIcons/calculator.svg",
      description: "Perform arithmetic calculations",
    },
    {
      id: "paint",
      label: "Paint",
      icon: "assets/desktopIcons/rnote.svg",
      description: "Create and edit simple drawings",
    },
    {
      id: "todo",
      label: "ToDo",
      icon: "assets/desktopIcons/bloc.svg",
      description: "Manage your daily tasks",
    },
    {
      id: "video",
      label: "Video Player",
      icon: "assets/desktopIcons/video.svg",
      description: "Play and manage videos",
    },
    {
      id: "translate",
      label: "Translate",
      icon: "assets/desktopIcons/translate.svg",
      description: "Translate text between languages",
    },
    {
      id: "software",
      label: "Ubuntu Software",
      icon: "assets/extra-icons/ubuntu.svg",
      description: "Install and update software",
    },
    {
      id: "settings",
      label: "Settings",
      icon: "assets/sidebarIcons/settings.svg",
      description: "Configure system preferences",
    },
  ];
}
