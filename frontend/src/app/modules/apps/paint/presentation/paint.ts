import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { AppWindow } from "../../../desktop/presentation/layouts/app-window";
import { PaintStore } from "../infrastructure/paint.store";
import { Canvas } from "./components/canvas/canvas";
import { ColoredToolbar } from "./components/colored-toolbar/colored-toolbar";
import { HeaderControlExtra } from "./components/header-control-extra/header-control-extra";
import { PencilToolbar } from "./components/pencil-toolbar/pencil-toolbar";

@Component({
  selector: "app-paint",
  imports: [
    AppWindow,
    Canvas,
    ColoredToolbar,
    PencilToolbar,
    HeaderControlExtra,
  ],
  providers: [PaintStore],
  templateUrl: "./paint.html",
  styles: `
    :host {
      display: contents;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Paint {
  readonly store = inject(PaintStore);
}
