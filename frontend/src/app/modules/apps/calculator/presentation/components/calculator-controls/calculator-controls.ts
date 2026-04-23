import { ChangeDetectionStrategy, Component } from "@angular/core";
import { ButtonCalculatorComponent } from "../button-calculator/button-calculator.component";

@Component({
  selector: "app-calculator-controls",
  imports: [ButtonCalculatorComponent],
  templateUrl: "./calculator-controls.component.html",
  styleUrl: "./calculator-controls.component.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalculatorControlsComponent {
  readonly buttons = [
    {
      label: "C",
      value: "CLEAR",
      class: "btn-c bg-red-500/20 text-red-500 hover:bg-red-500/30",
    },
    {
      label: "⌫",
      value: "BACKSPACE",
      class: "btn-del bg-white/10 hover:bg-white/20 text-white/80",
    },
    {
      label: "|x|",
      value: "ABSOLUTE",
      class: "btn-abs bg-white/10 hover:bg-white/20 text-white/80",
    },
    {
      label: "÷",
      value: "/",
      class:
        "btn-div bg-orange-500/20 text-orange-500 hover:bg-orange-500/30 text-xl",
    },

    {
      label: "7",
      value: "7",
      class: "btn-7 bg-white/5 hover:bg-white/10 text-white",
    },
    {
      label: "8",
      value: "8",
      class: "btn-8 bg-white/5 hover:bg-white/10 text-white",
    },
    {
      label: "9",
      value: "9",
      class: "btn-9 bg-white/5 hover:bg-white/10 text-white",
    },
    {
      label: "×",
      value: "*",
      class:
        "btn-mul bg-orange-500/20 text-orange-500 hover:bg-orange-500/30 text-xl",
    },

    {
      label: "4",
      value: "4",
      class: "btn-4 bg-white/5 hover:bg-white/10 text-white",
    },
    {
      label: "5",
      value: "5",
      class: "btn-5 bg-white/5 hover:bg-white/10 text-white",
    },
    {
      label: "6",
      value: "6",
      class: "btn-6 bg-white/5 hover:bg-white/10 text-white",
    },
    {
      label: "−",
      value: "-",
      class:
        "btn-sub bg-orange-500/20 text-orange-500 hover:bg-orange-500/30 text-xl",
    },

    {
      label: "1",
      value: "1",
      class: "btn-1 bg-white/5 hover:bg-white/10 text-white",
    },
    {
      label: "2",
      value: "2",
      class: "btn-2 bg-white/5 hover:bg-white/10 text-white",
    },
    {
      label: "3",
      value: "3",
      class: "btn-3 bg-white/5 hover:bg-white/10 text-white",
    },
    {
      label: "+",
      value: "+",
      class:
        "btn-add bg-orange-500/20 text-orange-500 hover:bg-orange-500/30 text-xl",
    },

    {
      label: "0",
      value: "0",
      class: "btn-0 bg-white/5 hover:bg-white/10 text-white",
    },
    {
      label: ".",
      value: ".",
      class: "btn-dot bg-white/5 hover:bg-white/10 text-white",
    },
    {
      label: "=",
      value: "CALCULATE",
      class:
        "btn-eq bg-orange-500 text-white hover:bg-orange-600 shadow-lg shadow-orange-500/20 text-xl font-bold",
    },
  ];
}
