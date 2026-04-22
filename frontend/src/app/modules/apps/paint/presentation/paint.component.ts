import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { PaintStore } from "../infrastructure/paint.store";
import { CanvasComponent } from "./components/canvas/canvas.component";
import { ColoredToolbarComponent } from "./components/colored-toolbar/colored-toolbar.component";
import { HeaderControlExtraComponent } from "./components/header-control-extra/header-control-extra.component";
import { PencilToolbarComponent } from "./components/pencil-toolbar/pencil-toolbar.component";
import {
  WindowActions,
  WindowWrapperComponent,
} from "../../../../layout/window-wrapper/window-wrapper.component";

@Component({
  selector: "app-paint",
  imports: [
    WindowWrapperComponent,
    CanvasComponent,
    ColoredToolbarComponent,
    PencilToolbarComponent,
    HeaderControlExtraComponent,
  ],
  providers: [PaintStore],
  templateUrl: "./paint.component.html",
  styles: `
    :host {
      display: contents;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PaintComponent {
  readonly store = inject(PaintStore);

  public onWindowAction(action: WindowActions): void {
    console.log("Window action:", action);
  }
}
