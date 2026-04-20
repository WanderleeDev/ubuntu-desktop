import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { ToolbarContainerComponent } from "../toolbar-container.component";
import { StrokeControlComponent } from "../stroke-control/stroke-control.component";
import { PaintStore } from "../../../infrastructure/paint.store";
import { IPaintButton } from "../../../domain/paint.model";
import { NgStyle } from "@angular/common";

@Component({
  selector: "app-pencil-toolbar",
  imports: [ToolbarContainerComponent, StrokeControlComponent, NgStyle],
  templateUrl: "./pencil-toolbar.component.html",
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PencilToolbarComponent {
  readonly store = inject(PaintStore);
  readonly tools: IPaintButton[];

  constructor() {
    this.tools = [
      {
        label: "Grosor",
        icon: "line_weight",
        onclick: () => this.store.toggleStrokeMenu(),
      },
      {
        label: "Paleta",
        icon: "palette",
        onclick: () => this.store.toggleColorBar(),
      },
      {
        label: "Borrador",
        icon: "ink_eraser",
        onclick: () => this.store.selectEraser(),
      },
      {
        label: "Limpiar",
        icon: "delete",
        onclick: () => this.store.clearAll(),
      },
      {
        label: "Descargar",
        icon: "download",
        onclick: () => this.store.download(),
      },
      {
        label: "Modo Zen",
        icon: "visibility_off",
        onclick: () => this.store.toggleFullscreen(),
      },
    ];
  }
}
