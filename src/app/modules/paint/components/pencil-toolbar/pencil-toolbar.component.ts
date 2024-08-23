import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { ToolbarContainerComponent } from "../../containers/toolbar-container.component";
import { StrokeControlComponent } from "../stroke-control/stroke-control.component";
import { BtnFileComponent } from "../../../../shared/components/btn-file/btn-file.component";
import { PaintStore } from "../../local-store/paint.store";
import { IPaintButton } from "../../interfaces/IPaintButton.interface";
import { AsyncPipe } from "@angular/common";

@Component({
  selector: "app-pencil-toolbar",
  standalone: true,
  imports: [
    ToolbarContainerComponent,
    StrokeControlComponent,
    BtnFileComponent,
    AsyncPipe
  ],
  templateUrl: "./pencil-toolbar.component.html",
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PencilToolbarComponent {
  #paintStore: PaintStore = inject(PaintStore);
  isViewStrokeMenu$ = this.#paintStore.hasStrokeMenu;
  readonly tools: IPaintButton[];

  constructor() {
    this.tools = [
      {
        label: "stroke",
        urlSvg: "assets/paint-icons/stroke.svg",
        onclick: this.#paintStore.toggleStrokeMenu,
      },
      {
        label: "color",
        urlSvg: "assets/paint-icons/paintbrush.svg",
        onclick: this.#paintStore.toggleColorBar,
      },
      {
        label: "eraser",
        urlSvg: "assets/paint-icons/eraser.svg",
      },
      {
        label: "eraser all",
        urlSvg: "assets/paint-icons/eraserAll.svg",
      },
      {
        label: "eye",
        urlSvg: "assets/paint-icons/eye.svg",
        onclick: this.#paintStore.toggleFullscreen,
      },
      {
        label: "extras",
        urlSvg: "assets/paint-icons/wrench.svg",
        onclick: this.#paintStore.toggleExtraBar,
      },
    ];
  }
}
