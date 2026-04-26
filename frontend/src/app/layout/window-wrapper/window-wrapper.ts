import { CdkDrag, CdkDragHandle, DragRef, Point } from "@angular/cdk/drag-drop";
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
} from "@angular/core";
import { APP_DESKTOP_ID } from "../../modules/desktop/infrastructure/app-desktop-id.token";

@Component({
  selector: "app-window-wrapper",
  imports: [CdkDrag, CdkDragHandle],
  templateUrl: "./window-wrapper.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: `
    :host {
      display: contents;
    }
  `,
})
export class WindowWrapper {
  readonly appDesktopId = inject(APP_DESKTOP_ID);
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
    console.log(this.appDesktopId);
  }
}
