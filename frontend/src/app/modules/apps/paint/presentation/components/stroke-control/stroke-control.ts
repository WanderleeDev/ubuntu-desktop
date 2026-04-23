import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { PaintStore } from "../../../infrastructure/paint.store";
import { ToolbarContainerComponent } from "../toolbar-container.component";

@Component({
  selector: "app-stroke-control",
  imports: [ToolbarContainerComponent],
  templateUrl: "./stroke-control.component.html",
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StrokeControlComponent {
  readonly store = inject(PaintStore);
}
