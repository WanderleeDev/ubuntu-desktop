import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { WindowWrapper } from "../../../../layout/window-wrapper/window-wrapper";
import { PaintStore } from "../infrastructure/paint.store";
import { Canvas } from "./components/canvas/canvas";
import { ColoredToolbar } from "./components/colored-toolbar/colored-toolbar";
import { HeaderControlExtra } from "./components/header-control-extra/header-control-extra";
import { PencilToolbar } from "./components/pencil-toolbar/pencil-toolbar";

@Component({
  selector: "app-paint",
  imports: [
    WindowWrapper,
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
