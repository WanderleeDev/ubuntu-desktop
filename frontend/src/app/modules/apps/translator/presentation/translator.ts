import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
} from "@angular/core";

import { AppWindow } from "../../../desktop/presentation/layouts/app-window";
import { TranslationRepository } from "../domain/translation.repository";
import { GeminiTranslationRepository } from "../infrastructure/gemini-translation.repository";
import { TranslatorStore } from "../infrastructure/translator.store";
import { TranslateTextUseCase } from "../use-cases/translate-text.use-case";
import { TranslatorBoxInput } from "./components/translator-box-input/translator-box-input";
import { TranslatorBoxOutput } from "./components/translator-box-output/translator-box-output";
import { TranslatorControls } from "./components/translator-controls/translator-controls";

@Component({
  selector: "app-translator",
  imports: [
    AppWindow,
    TranslatorControls,
    TranslatorBoxInput,
    TranslatorBoxOutput,
  ],
  providers: [
    TranslatorStore,
    TranslateTextUseCase,
    { provide: TranslationRepository, useClass: GeminiTranslationRepository },
  ],
  templateUrl: "./translator.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Translator {
  protected readonly store = inject(TranslatorStore);
  protected readonly MAX_INPUT_CHARACTERS = 100;

  protected readonly $hasDisabledTranslatebtn = computed(
    () =>
      !this.store.textBase().trim() ||
      this.store.textBase().length > this.MAX_INPUT_CHARACTERS
  );
}
