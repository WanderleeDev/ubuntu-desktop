import { CdkDrag } from "@angular/cdk/drag-drop";
import { Component } from "@angular/core";

@Component({
  selector: "app-desktop-grid",
  imports: [CdkDrag],
  templateUrl: "./grid.component.html",
})
export class GridComponent {}
