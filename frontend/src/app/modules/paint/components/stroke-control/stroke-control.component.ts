import { AsyncPipe, NgStyle } from "@angular/common";
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
} from "@angular/core";
import { orientation, strokeAction } from "../../types/paint.types";
import { PaintStore } from "../../local-store/paint.store";

@Component({
  selector: "app-stroke-control",
  standalone: true,
  imports: [NgStyle, AsyncPipe],
  templateUrl: "./stroke-control.component.html",
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StrokeControlComponent {
  #paintStore: PaintStore = inject(PaintStore);
  strokeWidth$ = this.#paintStore.strokeWidthSelector$;
  direction = input<orientation>("vertical");

  public onCLick(action: strokeAction): void {
    this.#paintStore.setStrokeWidth(action);
  }
}
