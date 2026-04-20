import { NgStyle } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { PaintStore } from "../../../infrastructure/paint.store";
import { ColorPickerComponent } from "../color-picker/color-picker.component";
import { ToolbarContainerComponent } from "../toolbar-container.component";

@Component({
  selector: "app-colored-toolbar",
  imports: [ToolbarContainerComponent, ColorPickerComponent, NgStyle],
  templateUrl: "./colored-toolbar.component.html",
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColoredToolbarComponent {
  readonly store = inject(PaintStore);
  readonly hexColors = [
    "#1D1D1D",
    "#99C0EF",
    "#1A5FB3",
    "#25A168",
    "#F4C110",
    "#E46000",
    "#A51D2D",
  ];

  public onChange(color: string): void {
    this.store.setColor(color);
  }
}
