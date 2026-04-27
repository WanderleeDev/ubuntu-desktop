import { CdkDrag, CdkDragHandle, DragRef, Point } from "@angular/cdk/drag-drop";
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
} from "@angular/core";
import { APP_DESKTOP_ID } from "../../infrastructure/app-desktop-id.token";
import { AppManagerStore } from "../../infrastructure/app-manager.store";

@Component({
  selector: "app-window",
  imports: [CdkDragHandle],
  templateUrl: "./app-window.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [CdkDrag],
  host: {
    class:
      "flex flex-col bg-secondary overflow-hidden shadow-2xl border border-text/10 select-none w-fit absolute z-0 left-2/4 top-2/4 -translate-x-1/2 -translate-y-1/2 starting:scale-50 will-change-transform",
  },
})
export class AppWindow {
  constructor() {
    inject(CdkDrag, { self: true }).constrainPosition = this.constrainPosition;
  }

  readonly appDesktopId = inject(APP_DESKTOP_ID);
  readonly #appManager = inject(AppManagerStore);
  readonly appTitle = input.required<string>();

  public constrainPosition = (
    point: Point,
    _dragRef: DragRef,
    _initialRect: DOMRect,
    pickupPositionInElement: Point
  ): Point => {
    const naturalX = point.x - pickupPositionInElement.x;
    const naturalY = point.y - pickupPositionInElement.y;

    return {
      x: naturalX,
      y: Math.max(naturalY, 28),
    };
  };

  public onClick(): void {
    this.#appManager.remove(this.appDesktopId);
  }
}
