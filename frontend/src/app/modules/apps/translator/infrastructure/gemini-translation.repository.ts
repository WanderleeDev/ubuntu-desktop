import { Injectable } from "@angular/core";
import {
  GoogleGenerativeAI,
  ModelParams,
} from "@google/generative-ai";
import { environment } from "../../../../../environments/environment.development";
import { TranslationRepository } from "../domain/translation.repository";

@Injectable()
export class GeminiTranslationRepository extends TranslationRepository {
  readonly #gemini = new GoogleGenerativeAI(environment.GEMINI_API);

  readonly #modelConfig: ModelParams = {
    model: "gemini-1.5-pro",
    generationConfig: { maxOutputTokens: 100 },
    systemInstruction: `${environment.PROMT_TRANSLATOR}`,
  };

  async *translate(
    text: string,
    from: string,
    to: string
  ): AsyncGenerator<string> {
    const result = await this.#gemini
      .getGenerativeModel(this.#modelConfig)
      .generateContentStream(
        `Translate this text:\n"${text}"\nFrom: ${from}\nTo: ${to}`
      );

    for await (const chunk of result.stream) {
      yield chunk.text();
    }
  }
}
