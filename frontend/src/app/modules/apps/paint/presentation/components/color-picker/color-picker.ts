import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, output } from "@angular/core";

@Component({
  selector: "app-color-picker",
  imports: [CommonModule],
  templateUrl: "./color-picker.html",
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColorPicker {
  changeColor = output<string>();

  public onChange(color: string): void {
    this.changeColor.emit(color);
  }
}
