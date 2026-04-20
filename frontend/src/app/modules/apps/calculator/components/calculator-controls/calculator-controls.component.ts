import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CalculatorControl } from "../../interfaces/CalculatorControl.interface";
import { controls } from "../../data/controls";
import { ButtonCalculatorComponent } from "../button-calculator/button-calculator.component";

@Component({
    selector: "app-calculator-controls",
    imports: [ButtonCalculatorComponent],
    templateUrl: "./calculator-controls.component.html",
    styleUrl: "./calculator-controls.component.css",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalculatorControlsComponent {
  listButtons: CalculatorControl[] = controls;
  readonly executeCharacter = "=";
}
