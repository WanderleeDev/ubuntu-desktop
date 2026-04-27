import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  inject,
} from "@angular/core";
import { APP_DESKTOP_ID } from "../../../desktop/infrastructure/app-desktop-id.token";
import { AppWindow } from "../../../desktop/presentation/layouts/app-window";
import { CalculatorStore } from "../infrastructure/calculator.store";
import { CalculatorManagerService } from "../services/calculator-manager.service";
import { CalculatorControls } from "./components/calculator-controls/calculator-controls";
import { CalculatorDisplay } from "./components/calculator-display/calculator-display";
import { CalculatorUndoBtn } from "./components/calculator-undo-btn/calculator-undo-btn";

@Component({
  selector: "app-calculator",
  imports: [
    AppWindow,
    CalculatorControls,
    CalculatorDisplay,
    CalculatorUndoBtn,
  ],
  providers: [CalculatorManagerService, CalculatorStore],
  templateUrl: "./calculator.html",
  styles: `
    :host {
      display: contents;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Calculator {
  readonly store = inject(CalculatorStore);
  readonly id = inject(APP_DESKTOP_ID);

  @HostListener("window:keydown", ["$event"])
  handleKeyboardEvent(event: KeyboardEvent): void {
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
  onClick(target: EventTarget | null): void {
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
