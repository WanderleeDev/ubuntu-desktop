import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
} from "@angular/core";
import { TranslatorStore } from "../../../infrastructure/translator.store";
import { SelectorComponent } from "../selector/selector.component";

@Component({
  selector: "app-translator-controls",
  imports: [SelectorComponent],
  templateUrl: "./translator-controls.component.html",
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TranslatorControlsComponent {
  readonly $isDisabled = input.required<boolean>();
  protected readonly store = inject(TranslatorStore);

  public async translate(): Promise<void> {
    if (this.$isDisabled()) return;
    await this.store.translate();
  }
}
