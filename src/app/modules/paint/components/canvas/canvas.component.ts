import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, signal } from "@angular/core";
import { ICanvasConfig } from "../../interfaces/ICanvasConfig.interface";

@Component({
  selector: "app-canvas",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./canvas.component.html",
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CanvasComponent {
  canvasConfig = signal<ICanvasConfig>({
    width: 700,
    height: 600,
    isDrawing: false,
    trazos: [],
  });
  isDrawing = true;

  public onStartDrawing($event: MouseEvent, color: string, grosor: number) {
    this.isDrawing = true;
    const nuevoTrazo = new Path2D();
    nuevoTrazo.moveTo($event.offsetX, $event.offsetY);
    this.canvasConfig.update((state) => ({
      ...state,
      trazos: [
        ...state.trazos,
        {
          color,
          grosor,
          path: nuevoTrazo,
        },
      ],
    }));
  }

  public onDraw($event: any) {}

  public OnEndDrawing() {}
}
