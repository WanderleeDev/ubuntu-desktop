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
  imports: [CdkDrag, CdkDragHandle],
  templateUrl: "./app-window.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: `
    :host {
      display: contents;
    }
  `,
})
export class AppWindow {
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
