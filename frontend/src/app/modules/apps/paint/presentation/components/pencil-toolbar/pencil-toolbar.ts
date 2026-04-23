import { NgStyle } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { IPaintButton } from "../../../domain/paint.model";
import { PaintStore } from "../../../infrastructure/paint.store";
import { StrokeControl } from "../stroke-control/stroke-control";
import { ToolbarContainer } from "../toolbar-container";

@Component({
  selector: "app-pencil-toolbar",
  imports: [ToolbarContainer, StrokeControl, NgStyle],
  templateUrl: "./pencil-toolbar.html",
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PencilToolbar {
  readonly store = inject(PaintStore);
  readonly tools: IPaintButton[];

  constructor() {
    this.tools = [
      {
        label: "Grosor",
        icon: "line_weight",
        onclick: (): void => this.store.toggleStrokeMenu(),
      },
      {
        label: "Paleta",
        icon: "palette",
        onclick: (): void => this.store.toggleColorBar(),
      },
      {
        label: "Borrador",
        icon: "ink_eraser",
        onclick: (): void => this.store.selectEraser(),
      },
      {
        label: "Limpiar",
        icon: "delete",
        onclick: (): void => this.store.clearAll(),
      },
      {
        label: "Descargar",
        icon: "download",
        onclick: (): void => this.store.download(),
      },
      {
        label: "Modo Zen",
        icon: "visibility_off",
        onclick: (): void => this.store.toggleFullscreen(),
      },
    ];
  }
}
