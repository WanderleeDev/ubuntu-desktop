import { AsyncPipe, CommonModule } from "@angular/common";
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
  input,
} from "@angular/core";
import { TranslatorLoaderComponent } from "../translator-loader/translator-loader.component";
import { Store } from "@ngrx/store";
import { AppState } from "../../../../core/store/app.state";
import { TRANSLATOR_ACTIONS } from "../../../../core/store/actions/translator.actions";
import { TRANSLATOR_SELECTORS } from "../../../../core/store/selectors/translator.selectors";
import { Observable } from "rxjs";
import { CapitalizePipe } from "../../../../shared/pipes/capitalize.pipe";
import { ReplaceCharactersPipe } from "../../../../shared/pipes/replace-characters.pipe";
import { ClipboardModule } from "@angular/cdk/clipboard";
import { BtnBasicComponent } from "../../../../shared/components/btn-basic/btn-basic.component";
import { BtnFileComponent } from "../../../../shared/components/btn-file/btn-file.component";
import { FormControl, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: "app-translator-box-input",
  standalone: true,
  imports: [
    CommonModule,
    TranslatorLoaderComponent,
    AsyncPipe,
    CapitalizePipe,
    ReplaceCharactersPipe,
    ClipboardModule,
    BtnBasicComponent,
    BtnFileComponent,
    ReactiveFormsModule,
  ],
  templateUrl: "./translator-box-input.component.html",
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TranslatorBoxInputComponent implements OnInit {
  textBoxControl = new FormControl("", { nonNullable: true });
  readonly #store: Store<AppState> = inject(Store);
  translation?: Observable<string>;
  isLoading = input.required<boolean>();
  typeTextBox = input.required<"input" | "output">();

  ngOnInit(): void {
    if (this.typeTextBox() === "input") return;

    this.translation = this.#store.select(
      TRANSLATOR_SELECTORS.selectTranslation
    );
    this.textBoxControl.disable();
  }

  public saveInputText(value: string): void {
    if (!value.trim()) return;

    this.#store.dispatch(TRANSLATOR_ACTIONS.saveText({ text: value }));
  }
}
