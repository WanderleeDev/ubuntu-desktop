import { CommonModule } from "@angular/common";
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  inject,
  input,
  signal,
} from "@angular/core";
import { Store } from "@ngrx/store";
import { TRANSLATOR_ACTIONS } from "src/app/core/store/actions/translator.actions";
import { AppState } from "src/app/core/store/app.state";
import { IButtonLanguage } from "../../interfaces/IButtonLanguage.interface";
import languages from "../../language/languages";

@Component({
  selector: "app-selector",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./selector.component.html",
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectorComponent implements OnInit {
  readonly #store: Store<AppState> = inject(Store);
  readonly #ref = inject(ElementRef);
  buttonConfig = input.required<IButtonLanguage>();
  buttonValue = signal<string>("");
  isViewListLanguages = signal<boolean>(false);
  readonly languages = languages;

  ngOnInit(): void {
    this.buttonValue.set(this.buttonConfig().initLanguage);
  }

  @HostListener("document:click", ["$event"])
  public onClick(event: PointerEvent): void {
    if (!this.#ref.nativeElement.contains(event.target)) {
      this.isViewListLanguages.set(false);
    }
  }

  public listToggle(): void {
    this.isViewListLanguages.update(prev => !prev);
  }

  public saveLanguage(language: string, action: "from" | "to"): void {
    this.buttonValue.set(language);
    this.#store.dispatch(TRANSLATOR_ACTIONS.setLanguage({ language, action }));
    this.listToggle();
  }
}
