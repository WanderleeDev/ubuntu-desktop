import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { WindowWrapperComponent } from "@layout/window-wrapper/window-wrapper.component";
import { TranslatorControlsComponent } from "./components/translator-controls/translator-controls.component";
import { TranslatorBoxInputComponent } from "./components/translator-box-input/translator-box-input.component";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store/app.state";
import { TRANSLATOR_SELECTORS } from "src/app/store/selectors/translator.selectors";
import { AsyncPipe } from "@angular/common";

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
