import { inject, Injectable } from "@angular/core";
import { TranslationRepository } from "../domain/translation.repository";

@Injectable()
export class TranslateTextUseCase {
  private readonly repository = inject(TranslationRepository);

  execute(text: string, from: string, to: string): AsyncGenerator<string> {
    if (!text?.trim()) throw new Error("No text to translate");
    return this.repository.translate(text.trim(), from, to);
  }
}
