import { Injectable, inject } from "@angular/core";
import { GoogleGenerativeAI, ModelParams } from "@google/generative-ai";
import { Store } from "@ngrx/store";
import { environment } from "../../../../environments/environment.development";
import { TRANSLATOR_ACTIONS } from "../../../store/actions/translator.actions";
import { AppState } from "../../../store/app.state";

@Injectable({
  providedIn: "root",
})
export class TranslatorService {
  readonly #store: Store<AppState> = inject(Store);
  readonly #gemini = new GoogleGenerativeAI(environment.GEMINI_API);
  readonly #geminiConfig: ModelParams = {
    model: "gemini-1.5-flash",
    generationConfig: { maxOutputTokens: 100 },
  };

  public async translateText(
    text: string,
    from: string,
    to: string
  ): Promise<void> {
    try {
      let textResponse = "";
      const data = await this.#gemini
        .getGenerativeModel(this.#geminiConfig)
        .generateContentStream(
          `translates the following text: "${text}" from ${from} to ${to}. Only return the translation if it could not be translated returns an empty string`
        );

      for await (const response of data.stream) {
        textResponse += response.text();
        this.#store.dispatch(
          TRANSLATOR_ACTIONS.saveTranslation({ translation: textResponse })
        );
      }
    } catch (e) {
      if (e instanceof Error) {
        return this.#store.dispatch(
          TRANSLATOR_ACTIONS.translateTextFailure({ error: e.message })
        );
      }

      this.#store.dispatch(
        TRANSLATOR_ACTIONS.translateTextFailure({
          error: "Something wrong",
        })
      );
    }
  }
}
