import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-emulator",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./emulator.component.html",
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmulatorComponent {}
