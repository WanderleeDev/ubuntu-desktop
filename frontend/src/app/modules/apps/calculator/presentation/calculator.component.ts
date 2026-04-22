import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  inject,
} from "@angular/core";
import { CalculatorManagerService } from "../services/calculator-manager.service";
import { CalculatorStore } from "../infrastructure/calculator.store";
import { CalculatorControlsComponent } from "./components/calculator-controls/calculator-controls.component";
import { CalculatorDisplayComponent } from "./components/calculator-display/calculator-display.component";
import { WindowWrapperComponent } from "../../../../layout/window-wrapper/window-wrapper.component";
import { CalculatorUndoBtnComponent } from "./components/calculator-undo-btn/calculator-undo-btn.component";

@Component({
  selector: "app-calculator",
  imports: [
    WindowWrapperComponent,
    CalculatorControlsComponent,
    CalculatorDisplayComponent,
    CalculatorUndoBtnComponent,
  ],
  providers: [CalculatorManagerService, CalculatorStore],
  templateUrl: "./calculator.component.html",
  styles: `
    :host {
      display: contents;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CalculatorComponent {
  readonly store = inject(CalculatorStore);

  @HostListener("window:keydown", ["$event"])
  handleKeyboardEvent(event: KeyboardEvent) {
    const key = event.key;

    if (
      /[0-9]/.test(key) ||
      ["+", "-", "*", "/", ".", "(", ")"].includes(key)
    ) {
      this.store.updateExpression(key);
    } else if (key === "Enter" || key === "=") {
      this.store.executeOperation();
    } else if (key === "Backspace") {
      this.store.deleteLastCharacter();
    } else if (key === "Escape") {
      this.store.clearExpression();
    }
  }

  @HostListener("click", ["$event.target"])
  onClick(target: any): void {
    if (!(target instanceof HTMLElement)) return;

    const btnAttribute = target.getAttribute("data-calculator");
    if (!btnAttribute) return;

    this.handleCalculatorAction(btnAttribute);
  }

  private handleCalculatorAction(action: string): void {
    switch (action) {
      case "CALCULATE":
      case "=":
        this.store.executeOperation();
        break;
      case "ABSOLUTE":
        this.store.toggleAbsoluteFn();
        break;
      case "CLEAR":
      case "C":
        this.store.clearExpression();
        break;
      case "BACKSPACE":
        this.store.deleteLastCharacter();
        break;
      default:
        this.store.updateExpression(action);
        break;
    }
  }
}
