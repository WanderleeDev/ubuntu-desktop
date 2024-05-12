import {
  ChangeDetectionStrategy,
  Component,
} from "@angular/core";
import { SelectorComponent } from "../selector/selector.component";

@Component({
  selector: "app-translator-controls",
  standalone: true,
  imports: [SelectorComponent],
  templateUrl: "./translator-controls.component.html",
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TranslatorControlsComponent {

}
