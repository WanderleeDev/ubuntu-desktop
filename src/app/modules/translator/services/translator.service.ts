import { Injectable, inject } from "@angular/core";
import { environment } from "../../../../environments/environment.development";
import { GoogleGenerativeAI, ModelParams } from "@google/generative-ai";
import { Store } from "@ngrx/store";
import { AppState } from "../../../core/store/app.state";
import { TRANSLATOR_ACTIONS } from "../../../core/store/actions/translator.actions";

@Injectable({
  providedIn: "root",
})
export class TranslatorService {
  readonly #store: Store<AppState> = inject(Store);
  readonly #gemini = new GoogleGenerativeAI(environment.GEMINI_API);
  readonly #geminiConfig: ModelParams = {
    model: "gemini-pro",
    generationConfig: { maxOutputTokens: 100 },
  };

  public async translateText(
    text: string,
    from: string,
    to: string
  ): Promise<void> {
    let textResponse = "";
    const data = await this.#gemini
      .getGenerativeModel(this.#geminiConfig)
      .generateContentStream(
        `Translate the following text: "${text}" from ${from} to ${to}`
      );

    try {
      for await (const response of data.stream) {
        console.log(`stream chunk: ${response.text()}`);
        textResponse += response.text();
        this.#store.dispatch(
          TRANSLATOR_ACTIONS.saveTranslation({ translation: textResponse })
        );
      }
    } catch (error) {
      error instanceof Error
        ? this.#store.dispatch(
            TRANSLATOR_ACTIONS.translateTextFailure({ error: error.message })
          )
        : this.#store.dispatch(
            TRANSLATOR_ACTIONS.translateTextFailure({
              error: "Something wrong",
            })
          );
    }
  }
}
