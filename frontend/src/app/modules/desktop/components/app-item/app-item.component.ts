import { NgOptimizedImage } from "@angular/common";
import { ChangeDetectionStrategy, Component, input } from "@angular/core";
import { DesktopIcon } from "../../interfaces/app-icon.interface";

@Component({
  selector: "app-app-item",
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: "./app-item.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppItemComponent {
  $appData = input.required<DesktopIcon>();
}
