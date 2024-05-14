import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { SelectorComponent } from "../selector/selector.component";
import { Store } from "@ngrx/store";
import { AppState } from "../../../../core/store/app.state";
import { TRANSLATOR_ACTIONS } from "../../../../core/store/actions/transalator.action";
import { TRANSLATOR_SELECTORS } from "../../../../core/store/selectors/translator.selectors";
import { AsyncPipe } from "@angular/common";

@Component({
  selector: "app-translator-controls",
  standalone: true,
  imports: [SelectorComponent, AsyncPipe],
  templateUrl: "./translator-controls.component.html",
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TranslatorControlsComponent {
  readonly #store: Store<AppState> = inject(Store);
  currentTextLength = this.#store.select(
    TRANSLATOR_SELECTORS.selectCurrentTextLength
  );
  readonly maxTextCharacters = 100;

  public translateText(): void {
    this.#store.dispatch(TRANSLATOR_ACTIONS.translateText());
  }
}
