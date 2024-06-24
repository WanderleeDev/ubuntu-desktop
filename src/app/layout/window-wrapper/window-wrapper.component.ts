import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, input } from "@angular/core";
import { NavDesktopControlComponent } from "../../modules/navbarDesktop/components/navDesktopControl/navDesktopControl.component";
import { CdkDrag, CdkDragHandle } from "@angular/cdk/drag-drop";
import { WindowControlComponent } from "../../shared/ui/windowControl/windowControl.component";

@Component({
  selector: "app-window-wrapper",
  standalone: true,
  imports: [
    CommonModule,
    NavDesktopControlComponent,
    WindowControlComponent,
    CdkDrag,
    CdkDragHandle,
  ],
  templateUrl: "./window-wrapper.component.html",
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WindowWrapperComponent {
  appTitle = input.required<string>();
}
