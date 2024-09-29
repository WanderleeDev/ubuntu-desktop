import { Component, input } from "@angular/core";

@Component({
  standalone: true,
  selector: "app-loader",
  templateUrl: "./loader.component.html",
})
export class LoaderComponent {
  size = input<number>(40);
}
