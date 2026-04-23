import { CommonModule, isPlatformBrowser } from "@angular/common";
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  PLATFORM_ID,
  effect,
  inject,
  signal,
  viewChild,
} from "@angular/core";
import { ICanvasConfig } from "../../../domain/paint.model";
import { PaintStore } from "../../../infrastructure/paint.store";

@Component({
  selector: "app-canvas",
  imports: [CommonModule],
  templateUrl: "./canvas.html",
  styles: `
    :host {
      display: block;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
    canvas {
      image-rendering: auto;
      touch-action: none;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Canvas implements AfterViewInit {
  readonly canvas = viewChild<ElementRef<HTMLCanvasElement>>("canvas");
  readonly store = inject(PaintStore);
  private platformId = inject(PLATFORM_ID);
  private ctx!: CanvasRenderingContext2D;

  canvasConfig = signal<ICanvasConfig>({
    width: 800,
    height: 600,
    isDrawing: false,
    trazos: [],
  });

  constructor() {
    effect(() => {
      if (this.store.clearSignal() > 0) {
        this.clearCanvas();
      }
    });

    effect(() => {
      if (this.store.downloadSignal() > 0) {
        this.downloadImage();
      }
    });
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.initContext();
    }
  }

  private initContext(): void {
    const canvasEl = this.canvas()?.nativeElement;
    if (canvasEl) {
      const context = canvasEl.getContext("2d");
      if (context) {
        this.ctx = context;
        this.ctx.lineCap = "round";
        this.ctx.lineJoin = "round";
        this.resizeCanvas();
      }
    }
  }

  private resizeCanvas(): void {
    const canvasEl = this.canvas()?.nativeElement;
    if (canvasEl && canvasEl.parentElement) {
      const { width, height } = canvasEl.parentElement.getBoundingClientRect();
      this.canvasConfig.update(s => ({
        ...s,
        width: width || 800,
        height: height || 600,
      }));
      setTimeout(() => this.resetCtxState(), 0);
    }
  }

  private resetCtxState(): void {
    if (this.ctx) {
      this.ctx.lineCap = "round";
      this.ctx.lineJoin = "round";
    }
  }

  public onStartDrawing($event: MouseEvent): void {
    this.canvasConfig.update(state => ({
      ...state,
      isDrawing: true,
    }));

    const nuevoTrazo = new Path2D();
    nuevoTrazo.moveTo($event.offsetX, $event.offsetY);

    this.canvasConfig.update(state => {
      const currentTrazos = [...state.trazos];
      currentTrazos.push({
        color: this.store.currentColor(),
        grosor: this.store.strokeWidth(),
        path: nuevoTrazo,
      });
      return { ...state, trazos: currentTrazos };
    });
  }

  public onDraw($event: MouseEvent): void {
    if (!this.canvasConfig().isDrawing || !this.ctx) return;

    const trazos = this.canvasConfig().trazos;
    if (trazos.length === 0) return;

    const trazoActual = trazos[trazos.length - 1];
    trazoActual.path.lineTo($event.offsetX, $event.offsetY);

    this.ctx.strokeStyle = trazoActual.color;
    this.ctx.lineWidth = trazoActual.grosor;
    this.ctx.stroke(trazoActual.path);
  }

  public onEndDrawing(): void {
    this.canvasConfig.update(state => ({
      ...state,
      isDrawing: false,
    }));
  }

  public clearCanvas(): void {
    const canvasEl = this.canvas()?.nativeElement;
    if (!canvasEl || !this.ctx) return;
    this.ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
    this.resetCtxState();
    this.canvasConfig.update(prev => ({ ...prev, trazos: [] }));
  }

  public downloadImage(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    const canvasEl = this.canvas()?.nativeElement;
    if (canvasEl) {
      const link = document.createElement("a");
      link.download = `paint-${Date.now()}.png`;
      link.href = canvasEl.toDataURL("image/png");
      link.click();
    }
  }
}
