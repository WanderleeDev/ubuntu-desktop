import { ChangeDetectionStrategy, Component, input } from "@angular/core";
import { NgOptimizedImage } from "@angular/common";
import { AppIcon } from "../../interfaces/app-icon.interface";

@Component({
  selector: "app-sidebar",
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: "./sidebar.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
  $mainIcons = input.required<AppIcon[]>();
  $secondaryIcons = input.required<AppIcon[]>();
}
