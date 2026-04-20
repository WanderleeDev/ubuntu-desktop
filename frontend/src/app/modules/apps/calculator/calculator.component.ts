import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
} from "@angular/core";
import { CalculatorControlsComponent } from "./components/calculator-controls/calculator-controls.component";
import { CalculatorDisplayComponent } from "./components/calculator-display/calculator-display.component";
import { CalculatorManagerService } from "./services/calculator-manager.service";
import { provideComponentStore } from "@ngrx/component-store";
import { CalculatorStore } from "./store/calculator.store";
import { CalculatorUndoBtnComponent } from "./components/calculator-undo-btn/calculator-undo-btn.component";
import { Record } from "./store/model/calculator.state";
import { LetDirective } from "@ngrx/component";
import { toSignal } from "@angular/core/rxjs-interop";
import { CalculatorAction } from "./interfaces/CalculatorActions.enum";
import { WindowWrapperComponent } from "../../../layout/window-wrapper/window-wrapper.component";

@Component({
    selector: "app-calculator",
    imports: [
        CalculatorControlsComponent,
        CalculatorDisplayComponent,
        CalculatorUndoBtnComponent,
        LetDirective,
        WindowWrapperComponent,
    ],
    templateUrl: "./calculator.component.html",
    styleUrl: "./calculator.component.css",
    providers: [CalculatorManagerService, provideComponentStore(CalculatorStore)],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export default class CalculatorComponent {
  readonly record$ = this.calculatorStore.record$;
  readonly hasAbsoluteFn$ = this.calculatorStore.hasAbsoluteFn$;
  readonly $expression = toSignal(this.calculatorStore.expression$, {
    initialValue: "",
  });

  constructor(private readonly calculatorStore: CalculatorStore) {}

  @HostListener("click", ["$event.target"])
  onClick(target: any): void {
    const btnAttribute = target.getAttribute("data-calculator");

    if (!btnAttribute) return;

    this.handleCalculatorAction(btnAttribute);
  }

  private handleCalculatorAction(action: string): void {
    switch (action) {
      case CalculatorAction.CALCULATE:
        if (this.$expression().length > 0) {
          this.calculatorStore.executeOperation();
        }
        break;

      case CalculatorAction.ABSOLUTE:
        this.calculatorStore.updateHasAbsoluteFn();
        break;

      case CalculatorAction.CLEAR:
        this.calculatorStore.clearExpression();
        break;

      default:
        this.calculatorStore.updateExpression(action);
        break;
    }
  }

  public backHistory(record: Record[]): void {
    if (record.length <= 0) return;

    this.calculatorStore.backRecord(record);
  }
}
