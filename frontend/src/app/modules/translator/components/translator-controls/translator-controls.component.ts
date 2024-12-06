import { ChangeDetectionStrategy, Component, input } from "@angular/core";
import { SelectorComponent } from "../selector/selector.component";
import { TranslatorService } from "../../services/translator.service";

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
  readonly $isDisabled = input.required<boolean>();

  constructor(private readonly translatorSvc: TranslatorService) {}

  public async translateText() {
    if (this.$isDisabled()) return;

    await this.translatorSvc.translateText();
  }
}
