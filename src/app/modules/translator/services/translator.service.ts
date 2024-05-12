import { Injectable } from "@angular/core";
import { environment } from "../../../../environments/environment.development";
import { GoogleGenerativeAI, ModelParams } from "@google/generative-ai";

@Injectable({
  providedIn: "root",
})
export class TranslatorService {
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
    const data = await this.#gemini
      .getGenerativeModel(this.#geminiConfig)
      .generateContentStream(
        `Translate the following text: "${text}" from ${from} to ${to}`
      );

      console.log(data);
      

    try {
      for await (const response of data.stream) {
        console.log(data);
        
        console.log(`stream chunk: ${response.text()}`);
      }
    } catch (error) {
      console.log(error);
    }
  }
}
