import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  input,
  model,
  signal,
  viewChild,
} from "@angular/core";
import languages from "../../../domain/languages";
import { ActionLanguageType } from "../../../domain/translation.model";
import { TranslatorStore } from "../../../infrastructure/translator.store";

@Component({
  selector: "app-selector",
  imports: [],
  templateUrl: "./selector.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Selector {
  readonly action = input.required<ActionLanguageType>();
  readonly currentLanguage = model.required<string>();
  readonly element = viewChild<ElementRef<HTMLUListElement>>("selector");

  protected readonly store = inject(TranslatorStore);
  protected readonly isViewOptions = signal(false);
  protected readonly currentIndex = signal<number | null>(null);
  protected readonly listLanguages = languages;

  listToggle(): void {
    this.isViewOptions.update(prev => !prev);
  }

  selectLanguage(language: string, index: number): void {
    this.currentLanguage.set(language);
    this.store.updateLanguage(this.action(), language);
    this.currentIndex.set(index);
    this.close();
  }

  close(): void {
    this.isViewOptions.set(false);
  }
}
