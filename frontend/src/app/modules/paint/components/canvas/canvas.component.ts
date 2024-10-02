import { CommonModule } from "@angular/common";
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  ViewChild,
  signal,
} from "@angular/core";
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
export class CanvasComponent implements AfterViewInit {
  @ViewChild("canvas") canvas!: ElementRef<HTMLCanvasElement>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ctx!: any;

  canvasConfig = signal<ICanvasConfig>({
    width: 700,
    height: 600,
    isDrawing: false,
    trazos: [],
  });

  context: CanvasRenderingContext2D | null = null;
  penColor = "#000";
  penThickness = 0;
  selectedTool = "pen";
  selectedColor = "#000";
  img = new Image();

  ngAfterViewInit(): void {
    this.context = this.canvas.nativeElement.getContext("2d");
    this.ctx = this.canvas.nativeElement.getContext("2d");
  }

  public onStartDrawing(
    $event: MouseEvent,
    color: string,
    grosor: number
  ): void {
    this.canvasConfig.update(state => ({
      ...state,
      isDrawing: true,
    }));

    const nuevoTrazo = new Path2D();

    nuevoTrazo.moveTo($event.offsetX, $event.offsetY);

    this.canvasConfig.update(state => ({
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

  public onDraw($event: MouseEvent): void {
    const trazoActual =
      this.canvasConfig().trazos[this.canvasConfig().trazos.length - 1];
    trazoActual.path.lineTo($event.offsetX, $event.offsetY);
    this.ctx.strokeStyle = trazoActual.color;
    this.ctx.lineWidth = trazoActual.grosor;
    this.ctx.stroke(trazoActual.path);
  }

  public OnEndDrawing(): void {
    this.canvasConfig.update(state => ({
      ...state,
      isDrawing: false,
    }));
  }

  public clearCanvas(): void {
    this.ctx.clearRect(
      0,
      0,
      this.canvas.nativeElement.width,
      this.canvas.nativeElement.height
    );
    this.canvasConfig.update(prev => ({ ...prev, trazos: [] }));
  }
}
