import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { FormBuilder, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { DividerXComponent } from "../../../../shared/components/divider-x/divider-x.component";

@Component({
  selector: "app-form-color-system",
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, DividerXComponent],
  templateUrl: "./form-color-system.component.html",
  styleUrls: ["./form-color-system.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class FormColorSystemComponent {
  #formBuilder = inject(FormBuilder);
  formColor: FormGroup;
  colors = [
    "#EA551F",
    "#797758",
    "#647B68",
    "#4A8700",
    "#04895C",
    "#2F8181",
    "#0A70DF",
    "#7764D8",
    "#B14FB4",
    "#DD3452",
  ];
  darkLight = ["light", "dark"];

  constructor() {
    this.formColor = this.#formBuilder.nonNullable.group({
      darkLight: [""],
      colors: [""],
    });
  }
}
