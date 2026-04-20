import { ChangeDetectionStrategy, Component } from "@angular/core";
import { Record } from "../../store/model/calculator.state";
import { CalculatorRecordEmptyComponent } from "../calculator-record-empty/calculator-record-empty.component";
import { CalculatorStore } from "../../store/calculator.store";
import { Observable } from "rxjs";
import { LetDirective } from "@ngrx/component";
import { DecimalPipe } from "@angular/common";

@Component({
    selector: "app-calculator-display",
    imports: [CalculatorRecordEmptyComponent, LetDirective, DecimalPipe],
    templateUrl: "./calculator-display.component.html",
    styleUrl: "./calculator-display.component.css",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalculatorDisplayComponent {
  expression$: Observable<string> = this.calculatorStore.expression$;
  record$: Observable<Record[]> = this.calculatorStore.record$;
  error$: Observable<string | null> = this.calculatorStore.error$;
  hasAbsoluteFn$: Observable<boolean> = this.calculatorStore.hasAbsoluteFn$;

  constructor(private readonly calculatorStore: CalculatorStore) {}

  public updateExpression(value: string): void {
    this.calculatorStore.setExpression(value.trim());
  }

  public executeOperation(expression: string): void {
    if (expression.length === 0) return;

    this.calculatorStore.executeOperation();
  }
}
