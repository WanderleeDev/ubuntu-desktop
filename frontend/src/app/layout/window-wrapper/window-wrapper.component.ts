import { CdkDrag, CdkDragHandle, DragRef, Point } from "@angular/cdk/drag-drop";
import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from "@angular/core";

export enum WindowActions {
  MINIMIZE_WINDOW = "MINIMIZE_WINDOW",
  MAXIMIZE_WINDOW = "MAXIMIZE_WINDOW",
  CLOSE_WINDOW = "CLOSE_WINDOW",
}

@Component({
  selector: "app-window-wrapper",
  imports: [CdkDrag, CdkDragHandle],
  templateUrl: "./window-wrapper.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: `
    :host {
      display: contents;
    }
  `,
})
export class WindowWrapperComponent {
  protected readonly WindowActions = WindowActions;
  readonly windowAction = output<WindowActions>();
  readonly appTitle = input.required<string>();
  readonly isMaximized = input<boolean>(false);

  public constrainPosition = (
    point: Point,
    _dragRef: DragRef,
    _initialRect: DOMRect,
    pickupPositionInElement: Point
  ) => {
    const naturalX = point.x - pickupPositionInElement.x;
    const naturalY = point.y - pickupPositionInElement.y;

    return {
      x: naturalX,
      y: Math.max(naturalY, 28),
    };
  };

  public onClick(action: WindowActions) {
    this.windowAction.emit(action);
  }
}
