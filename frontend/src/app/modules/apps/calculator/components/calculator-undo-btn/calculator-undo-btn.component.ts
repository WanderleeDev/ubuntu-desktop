import { ChangeDetectionStrategy, Component, input } from "@angular/core";

@Component({
    selector: "app-calculator-undo-btn",
    imports: [],
    templateUrl: "./calculator-undo-btn.component.html",
    styleUrl: "./calculator-undo-btn.component.css",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalculatorUndoBtnComponent {
  isDisabled = input.required<boolean>();
}
