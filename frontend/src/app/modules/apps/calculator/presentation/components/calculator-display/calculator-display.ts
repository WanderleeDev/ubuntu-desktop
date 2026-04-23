import { DecimalPipe } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { CalculatorStore } from "../../../infrastructure/calculator.store";
import { CalculatorRecordEmptyComponent } from "../calculator-record-empty/calculator-record-empty.component";

@Component({
  selector: "app-calculator-display",
  imports: [CalculatorRecordEmptyComponent, DecimalPipe],
  templateUrl: "./calculator-display.component.html",
  styles: `
    :host {
      display: block;
      width: 100%;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalculatorDisplayComponent {
  readonly store = inject(CalculatorStore);
}
