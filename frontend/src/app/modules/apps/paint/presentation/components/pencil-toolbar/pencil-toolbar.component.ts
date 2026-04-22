import { NgStyle } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { IPaintButton } from "../../../domain/paint.model";
import { PaintStore } from "../../../infrastructure/paint.store";
import { StrokeControlComponent } from "../stroke-control/stroke-control.component";
import { ToolbarContainerComponent } from "../toolbar-container.component";

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
