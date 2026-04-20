import {
  booleanAttribute,
  ChangeDetectionStrategy,
  Component,
  input,
} from "@angular/core";

@Component({
    selector: "app-button-calculator",
    imports: [],
    templateUrl: "./button-calculator.component.html",
    styleUrl: "./button-calculator.component.css",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonCalculatorComponent {
  titleBtn = input.required<string>();
  dataBtn = input.required<string>();
  isEqualsBtn = input(false, {
    transform: booleanAttribute,
  });
}
