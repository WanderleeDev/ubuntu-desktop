import { DecimalPipe } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { CalculatorStore } from "../../../infrastructure/calculator.store";
import { CalculatorRecordEmpty } from "../calculator-record-empty/calculator-record-empty";

@Component({
  selector: "app-calculator-display",
  imports: [CalculatorRecordEmpty, DecimalPipe],
  templateUrl: "./calculator-display.html",
  styles: `
    :host {
      display: block;
      width: 100%;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalculatorDisplay {
  readonly store = inject(CalculatorStore);
}
