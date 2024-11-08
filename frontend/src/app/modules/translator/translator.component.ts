import { ChangeDetectionStrategy, Component, inject } from "@angular/core";

import { AsyncPipe } from "@angular/common";
import { Store } from "@ngrx/store";
import { WindowWrapperComponent } from "../../layout/window-wrapper/window-wrapper.component";
import { AppState } from "../../core/store/app.state";
import { TRANSLATOR_SELECTORS } from "../../core/store/selectors/translator.selectors";
import { TranslatorBoxInputComponent } from "./components/translator-box-input/translator-box-input.component";
import { TranslatorControlsComponent } from "./components/translator-controls/translator-controls.component";

@Component({
  selector: "app-translator",
  standalone: true,
  imports: [
    WindowWrapperComponent,
    TranslatorControlsComponent,
    TranslatorBoxInputComponent,
    AsyncPipe,
  ],
  templateUrl: "./translator.component.html",
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TranslatorComponent {
  readonly #store: Store<AppState> = inject(Store);
  isLoading$ = this.#store.select(TRANSLATOR_SELECTORS.selectLoading);
}
