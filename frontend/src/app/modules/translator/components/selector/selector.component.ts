import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  input,
  model,
  signal,
  viewChild,
} from "@angular/core";
import languages from "../../language/languages";
import { TranslatorService } from "../../services/translator.service";
import { ActionLanguageType } from "../../interfaces/TranslationState.interface";
import { ClickOutsideDirective } from "../../../../shared/directives/ClickOutside.directive";

@Component({
  selector: "app-selector",
  standalone: true,
  imports: [ClickOutsideDirective],
  templateUrl: "./selector.component.html",
  styleUrls: ["./selector.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectorComponent {
  readonly action = input.required<ActionLanguageType>();
  readonly currentLanguage = model.required<string>();
  readonly element = viewChild<ElementRef<HTMLUListElement>>("selector");
  protected readonly isViewoptions = signal<boolean>(false);
  protected readonly currentIndex = signal<number | null>(null);
  protected readonly listLanguages = languages;

  constructor(private readonly translatorSvc: TranslatorService) {}

  public listToggle(): void {
    this.isViewoptions.update(prev => !prev);
  }

  public selectLanguage(language: string, index: number): void {
    this.currentLanguage.set(language);
    this.translatorSvc.updateLanguauge(this.action(), language);
    this.currentIndex.set(index);
    this.close();
  }

  public close(): void {
    this.isViewoptions.set(false);
  }
}
