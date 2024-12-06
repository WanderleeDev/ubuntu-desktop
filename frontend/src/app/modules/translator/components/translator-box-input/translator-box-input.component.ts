import {
  ChangeDetectionStrategy,
  Component,
  input,
  OnInit,
} from "@angular/core";

import { ClipboardModule } from "@angular/cdk/clipboard";
import { FormControl, ReactiveFormsModule, Validators } from "@angular/forms";
import { BtnFileComponent } from "../../../../shared/components/btn-file/btn-file.component";
import { TranslatorService } from "../../services/translator.service";

@Component({
  selector: "app-translator-box-input",
  standalone: true,
  imports: [ClipboardModule, BtnFileComponent, ReactiveFormsModule],
  templateUrl: "./translator-box-input.component.html",
  styleUrls: ["translator-box-input.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TranslatorBoxInputComponent implements OnInit {
  readonly $maxInputCharacters = input.required<number>();
  protected readonly textBoxControl = new FormControl("", {
    nonNullable: true,
  });

  constructor(private readonly translatorSvc: TranslatorService) {}

  ngOnInit(): void {
    this.textBoxControl.addValidators([
      Validators.required,
      Validators.maxLength(this.$maxInputCharacters()),
    ]);
  }

  public saveInputText(text: string): void {
    this.translatorSvc.updateState({ textBase: text });
  }
}
