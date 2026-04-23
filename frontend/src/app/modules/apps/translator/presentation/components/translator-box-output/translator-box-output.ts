import { ClipboardModule } from "@angular/cdk/clipboard";
import { ChangeDetectionStrategy, Component, input } from "@angular/core";
import { TranslationState } from "../../../domain/translation.model";
import { TranslatorLoader } from "../translator-loader/translator-loader";

@Component({
  selector: "app-translator-box-output",
  imports: [ClipboardModule, TranslatorLoader],
  templateUrl: "./translator-box-output.html",
  styles: `
    :host {
      display: flex;
      flex-direction: column;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TranslatorBoxOutput {
  readonly $translationState = input.required<TranslationState>();
}
