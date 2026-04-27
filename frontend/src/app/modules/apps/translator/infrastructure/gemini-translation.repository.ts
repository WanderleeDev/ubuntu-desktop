import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { TranslationRepository } from "../domain/translation.repository";

@Injectable()
export class GeminiTranslationRepository extends TranslationRepository {
  private readonly http = inject(HttpClient);

  async *translate(
    text: string,
    from: string,
    to: string
  ): AsyncGenerator<string> {
    try {
      const response = await fetch("/api/translate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text, from, to }),
      });

      const reader = response.body?.getReader();
      if (!reader) return;

      const decoder = new TextDecoder();
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        yield decoder.decode(value);
      }
    } catch (error) {
      console.error("Translation error:", error);
      yield "Translation error. Please try again.";
    }
  }
}
