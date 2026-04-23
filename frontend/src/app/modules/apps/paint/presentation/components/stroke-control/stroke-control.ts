import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { PaintStore } from "../../../infrastructure/paint.store";
import { ToolbarContainer } from "../toolbar-container";

@Component({
  selector: "app-stroke-control",
  imports: [ToolbarContainer],
  templateUrl: "./stroke-control.html",
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StrokeControl {
  readonly store = inject(PaintStore);
}
