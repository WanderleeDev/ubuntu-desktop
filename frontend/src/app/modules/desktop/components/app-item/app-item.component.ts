import { Component, input } from "@angular/core";
import { NgOptimizedImage } from "@angular/common";

@Component({
  selector: "app-app-item",
  imports: [NgOptimizedImage],
  templateUrl: "./app-item.component.html",
})
export class AppItemComponent {
  $appData = input.required<any>();
  lazeComponent = input<any>();
}
