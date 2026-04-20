import { Component, input } from "@angular/core";
import { NgOptimizedImage } from "@angular/common";

@Component({
  selector: "app-sidebar",
  imports: [NgOptimizedImage],
  templateUrl: "./sidebar.component.html",
})
export class SidebarComponent {
  $mainIcons = input.required<any[]>();
  $secondaryIcons = input.required<any[]>();
}
