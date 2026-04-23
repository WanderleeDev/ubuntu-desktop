import { ClipboardModule } from "@angular/cdk/clipboard";
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
  OnInit,
} from "@angular/core";
import { FormControl, ReactiveFormsModule, Validators } from "@angular/forms";
import { TranslatorStore } from "../../../infrastructure/translator.store";

@Component({
  selector: "app-translator-box-input",
  imports: [ReactiveFormsModule, ClipboardModule],
  templateUrl: "./translator-box-input.html",
  styles: `
    :host {
      display: flex;
      flex-direction: column;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TranslatorBoxInput implements OnInit {
  readonly $maxInputCharacters = input.required<number>();

  protected readonly store = inject(TranslatorStore);
  protected readonly textBoxControl = new FormControl("", {
    nonNullable: true,
  });

  ngOnInit(): void {
    this.textBoxControl.addValidators([
      Validators.required,
      Validators.maxLength(this.$maxInputCharacters()),
    ]);
  }

  public onInput(text: string): void {
    this.store.updateTextBase(text);
  }
}
