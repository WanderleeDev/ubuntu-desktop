import { ChangeDetectionStrategy, Component, input } from "@angular/core";

@Component({
  standalone: true,
  selector: "app-loader",
  templateUrl: "./loader.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoaderComponent {
  size = input<number>(40);
}
