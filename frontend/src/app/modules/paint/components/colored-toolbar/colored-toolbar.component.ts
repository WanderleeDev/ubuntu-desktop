import { NgStyle } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { ToolbarContainerComponent } from "../../containers/toolbar-container.component";
import { ColorPickerComponent } from "../color-picker/color-picker.component";
import { PaintStore } from "../../local-store/paint.store";

@Component({
  selector: "app-colored-toolbar",
  standalone: true,
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
  #paintStore: PaintStore = inject(PaintStore);
  hexColors = [
    "#1D1D1D",
    "#99C0EF",
    "#1A5FB3",
    "#25A168",
    "#F4C110",
    "#E46000",
    "#A51D2D",
  ];

  public onChange(color: string): void {
    this.#paintStore.setColor(color);
  }
}
