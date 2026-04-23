import { ChangeDetectionStrategy, Component, input } from "@angular/core";

@Component({
  standalone: true,
  selector: "app-loader",
  templateUrl: "./loader.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Loader {
  size = input<number>(40);
}
