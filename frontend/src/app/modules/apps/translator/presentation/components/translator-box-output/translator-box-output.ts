import { ClipboardModule } from "@angular/cdk/clipboard";
import { ChangeDetectionStrategy, Component, input } from "@angular/core";
import { TranslationState } from "../../../domain/translation.model";
import { TranslatorLoaderComponent } from "../translator-loader/translator-loader.component";

@Component({
  selector: "app-translator-box-output",
  imports: [ClipboardModule, TranslatorLoaderComponent],
  templateUrl: "./translator-box-output.component.html",
  styles: `
    :host {
      display: flex;
      flex-direction: column;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TranslatorBoxOutputComponent {
  readonly $translationState = input.required<TranslationState>();
}
