import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-translator-loader",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./translator-loader.component.html",
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TranslatorLoaderComponent {}
