import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, input } from "@angular/core";
import { orientation } from "../types/paint.types";

@Component({
  selector: "app-toolbar-container",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      [class]="toolbarClass"
      [ngStyle]="{
        flexDirection: orientationBar() === 'vertical' ? 'column' : 'row'
      }"
    >
      <ng-content />
    </div>
  `,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolbarContainerComponent {
  readonly toolbarClass = 'bg-[#242424] rounded-md flex gap-2 p-2 shadow-bar select-none'
  orientationBar = input<orientation>("horizontal");
}
