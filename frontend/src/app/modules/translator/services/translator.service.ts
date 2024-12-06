import {
  GenerateContentStreamResult,
  GoogleGenerativeAI,
  ModelParams,
} from "@google/generative-ai";
import { environment } from "../../../../environments/environment.development";
import { errorHandler } from "../../../shared/utils/errorToastHandler";
import { Injectable, signal, computed } from "@angular/core";
import {
  TranslationState,
  LanguageOptions,
  ActionLanguageType,
} from "../interfaces/TranslationState.interface";
import { SignalsUtility } from "../../../shared/utils/signals.utils";

@Injectable()
export class TranslatorService {
  readonly #gemini = new GoogleGenerativeAI(environment.GEMINI_API);
  readonly #geminiConfig: ModelParams = {
    model: "gemini-1.5-pro",
    generationConfig: { maxOutputTokens: 100 },
    systemInstruction: `${environment.PROMT_TRANSLATOR}`,
  };
  readonly #$translationState = signal<TranslationState>({
    textBase: "",
    translation: "",
    error: null,
    loading: false,
  });
  readonly #$languagueOptions = signal<LanguageOptions>({
    from: "spanish",
    to: "english",
  });
  $translationStream = computed(() => this.#$translationState());
  $languageOptionStream = computed(() => this.#$languagueOptions());

  public async translateText(): Promise<void> {
    const textBase = this.#$translationState().textBase.trim();

    try {
      this.updateState({ loading: true, error: null, translation: "" });
      this.validateTextBase(textBase);
      await this.handleTranslation(textBase);
    } catch (e) {
      this.updateState({ error: errorHandler(e) });
    } finally {
      this.updateState({ loading: false });
    }
  }

  public updateState(partialState: Partial<TranslationState>): void {
    SignalsUtility.updateAllObj(this.#$translationState, partialState);
  }

  public updateLanguauge(key: ActionLanguageType, value: string) {
    SignalsUtility.updateOnePropertyObj(this.#$languagueOptions, key, value);
  }

  private async handleTranslation(text: string): Promise<void> {
    const data: GenerateContentStreamResult = await this.#gemini
      .getGenerativeModel(this.#geminiConfig)
      .generateContentStream(
        `
          Translate this text:
          "${text}"
          From: ${this.#$languagueOptions().from}
          To: ${this.#$languagueOptions().to}
          `
      );

    for await (const response of data.stream) {
      this.updateState({
        translation: this.#$translationState().translation + response.text(),
      });
    }
  }

  private validateTextBase(text: string): void {
    if (!text) throw new Error("No text to translate");
  }
}
