import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, output } from "@angular/core";

@Component({
  selector: "app-color-picker",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./color-picker.component.html",
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColorPickerComponent {
  changeColor = output<string>();

  public onChange(color: string) {
    this.changeColor.emit(color);
  }
}
