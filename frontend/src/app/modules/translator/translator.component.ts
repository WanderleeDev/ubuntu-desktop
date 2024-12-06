import {
  ChangeDetectionStrategy,
  Component,
  computed,
  OnDestroy,
  Signal,
} from "@angular/core";

import { WindowWrapperComponent } from "../../layout/window-wrapper/window-wrapper.component";
import { TranslatorBoxInputComponent } from "./components/translator-box-input/translator-box-input.component";
import { TranslatorControlsComponent } from "./components/translator-controls/translator-controls.component";
import { TranslatorBoxOutputComponent } from "./components/translator-box-output/translator-box-output.component";
import { TranslatorService } from "./services/translator.service";
import { TranslationState } from "./interfaces/TranslationState.interface";

@Component({
  selector: "app-translator",
  standalone: true,
  imports: [
    WindowWrapperComponent,
    TranslatorControlsComponent,
    TranslatorBoxInputComponent,
    TranslatorBoxOutputComponent,
  ],
  providers: [TranslatorService],
  templateUrl: "./translator.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TranslatorComponent implements OnDestroy {
  protected readonly $translationState: Signal<TranslationState>;
  protected readonly MAX_INPUT_CHARACTERS = 100;
  protected readonly $hasDisabledTranslatebtn = computed(
    () =>
      this.$translationState().translation.length > this.MAX_INPUT_CHARACTERS
  );

  constructor(private readonly translatorSvc: TranslatorService) {
    this.$translationState = this.translatorSvc.$translationStream;
  }

  ngOnDestroy(): void {
    console.log("destroy");
  }
}
