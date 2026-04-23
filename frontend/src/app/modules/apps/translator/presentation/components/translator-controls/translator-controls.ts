import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
} from "@angular/core";
import { TranslatorStore } from "../../../infrastructure/translator.store";
import { Selector } from "../selector/selector";

@Component({
  selector: "app-translator-controls",
  imports: [Selector],
  templateUrl: "./translator-controls.html",
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TranslatorControls {
  readonly $isDisabled = input.required<boolean>();
  protected readonly store = inject(TranslatorStore);

  public async translate(): Promise<void> {
    if (this.$isDisabled()) return;
    await this.store.translate();
  }
}
