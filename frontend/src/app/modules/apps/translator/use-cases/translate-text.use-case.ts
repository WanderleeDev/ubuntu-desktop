import { Injectable } from "@angular/core";
import { TranslationRepository } from "../domain/translation.repository";

@Injectable()
export class TranslateTextUseCase {
  constructor(private readonly repository: TranslationRepository) {}

  execute(text: string, from: string, to: string): AsyncGenerator<string> {
    if (!text?.trim()) throw new Error("No text to translate");
    return this.repository.translate(text.trim(), from, to);
  }
}
