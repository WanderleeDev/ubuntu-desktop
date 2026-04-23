import {
  CdkDragDrop,
  DragDropModule,
  moveItemInArray,
  transferArrayItem,
} from "@angular/cdk/drag-drop";
import { NgOptimizedImage } from "@angular/common";
import { ChangeDetectionStrategy, Component, signal } from "@angular/core";
import { AppIcon } from "../../interfaces/app-icon.interface";

@Component({
  selector: "app-sidebar",
  standalone: true,
  imports: [NgOptimizedImage, DragDropModule],
  templateUrl: "./sidebar.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Sidebar {
  mainIcons = signal<AppIcon[]>([
    { id: "firefox", icon: "assets/sidebarIcons/firefox.svg", app: "browser" },
    { id: "vsc", icon: "assets/sidebarIcons/vsc.svg", app: "vsc" },
    { id: "github", icon: "assets/sidebarIcons/github.svg", app: "github" },
  ]);

  secondaryIcons = signal<AppIcon[]>([
    { id: "folder", icon: "assets/sidebarIcons/settings.svg", app: "nautilus" },
    { id: "trash", icon: "assets/sidebarIcons/trash.webp", app: "trash" },
  ]);

  onDrop(event: CdkDragDrop<AppIcon[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      if (event.previousContainer.data.length <= 1) return;

      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
