import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
} from "@angular/core";
import { PaintStore } from "../../../infrastructure/paint.store";

@Component({
  selector: "app-header-control-extra",
  imports: [],
  templateUrl: "./header-control-extra.html",
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderControlExtra {
  isActiveFullscreen = input.required<boolean>();
  readonly store = inject(PaintStore);

  public toggleFullscreen(): void {
    this.store.toggleFullscreen();
  }

  public download(): void {
    this.store.download();
  }
}
