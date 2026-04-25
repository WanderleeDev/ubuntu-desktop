import { CdkDrag, CdkDragHandle, DragRef, Point } from "@angular/cdk/drag-drop";
import { ChangeDetectionStrategy, Component, input } from "@angular/core";

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
  protected readonly APP_ID = input<string>();
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
    console.log(this.APP_ID());
  }
}
