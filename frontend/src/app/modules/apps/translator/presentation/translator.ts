import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
} from "@angular/core";

import { WindowWrapperComponent } from "../../../../layout/window-wrapper/window-wrapper.component";
import { TranslationRepository } from "../domain/translation.repository";
import { GeminiTranslationRepository } from "../infrastructure/gemini-translation.repository";
import { TranslatorStore } from "../infrastructure/translator.store";
import { TranslateTextUseCase } from "../use-cases/translate-text.use-case";
import { TranslatorBoxInputComponent } from "./components/translator-box-input/translator-box-input.component";
import { TranslatorBoxOutputComponent } from "./components/translator-box-output/translator-box-output.component";
import { TranslatorControlsComponent } from "./components/translator-controls/translator-controls.component";

@Component({
  selector: "app-translator",
  imports: [
    WindowWrapperComponent,
    TranslatorControlsComponent,
    TranslatorBoxInputComponent,
    TranslatorBoxOutputComponent,
  ],
  providers: [
    TranslatorStore,
    TranslateTextUseCase,
    { provide: TranslationRepository, useClass: GeminiTranslationRepository },
  ],
  templateUrl: "./translator.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TranslatorComponent {
  protected readonly store = inject(TranslatorStore);
  protected readonly MAX_INPUT_CHARACTERS = 100;

  protected readonly $hasDisabledTranslatebtn = computed(
    () =>
      !this.store.textBase().trim() ||
      this.store.textBase().length > this.MAX_INPUT_CHARACTERS
  );
}
