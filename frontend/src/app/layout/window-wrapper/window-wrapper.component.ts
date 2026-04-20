import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from "@angular/core";
import { CdkDrag, CdkDragHandle } from "@angular/cdk/drag-drop";
import { BtnBasicComponent } from "../../shared/components/btn-basic/btn-basic.component";
// import { WindowActions } from "../../shared/interfaces/WindowActions.enum";

export enum WindowActions {
  MINIMIZE_WINDOW = "MINIMIZE_WINDOW",
  MAXIMIZE_WINDOW = "MAXIMIZE_WINDOW",
  CLOSE_WINDOW = "CLOSE_WINDOW",
}

@Component({
    selector: "app-window-wrapper",
    imports: [CdkDrag, BtnBasicComponent, CdkDragHandle],
    templateUrl: "./window-wrapper.component.html",
    // styleUrl: "./window-wrapper.component.css",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class WindowWrapperComponent {
  readonly windowAction = output<WindowActions>();
  readonly appTitle = input.required<string>();
  protected readonly dragPosition = { x: -250, y: -250 };
  protected readonly controls = [
    {
      urlSvg: "assets/controls-icons/minimize.svg",
      label: WindowActions.MINIMIZE_WINDOW,
    },
    {
      urlSvg: "assets/controls-icons/maximize.svg",
      label: WindowActions.MAXIMIZE_WINDOW,
    },
    {
      urlSvg: "assets/controls-icons/close.svg",
      label: WindowActions.CLOSE_WINDOW,
    },
  ];

  public onClick(action: WindowActions) {
    this.windowAction.emit(action);
    console.log(this);
  }
}
