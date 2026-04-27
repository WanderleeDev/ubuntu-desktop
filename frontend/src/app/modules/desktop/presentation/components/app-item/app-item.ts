import { NgOptimizedImage } from "@angular/common";
import { ChangeDetectionStrategy, Component, input } from "@angular/core";

@Component({
  selector: "app-item",
  imports: [NgOptimizedImage],
  templateUrl: "./app-item.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppItem {
  readonly icon = input.required<string>();
  readonly name = input.required<string>();
}
