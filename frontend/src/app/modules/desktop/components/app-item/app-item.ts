import { NgOptimizedImage } from "@angular/common";
import { ChangeDetectionStrategy, Component, input } from "@angular/core";
import { DesktopIcon } from "../../interfaces/app-icon.interface";

@Component({
  selector: "app-item",
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: "./app-item.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppItem {
  $appData = input.required<DesktopIcon>();
  priority = input<boolean>(false);
}
