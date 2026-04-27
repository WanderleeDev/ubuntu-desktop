import { ChangeDetectionStrategy, Component } from "@angular/core";
import { ButtonCalculator } from "../button-calculator/button-calculator";

@Component({
  selector: "app-calculator-controls",
  imports: [ButtonCalculator],
  templateUrl: "./calculator-controls.html",
  styleUrl: "./calculator-controls.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalculatorControls {
  readonly buttons = [
    {
      label: "C",
      value: "CLEAR",
      class:
        "btn-c bg-red-500/10 text-red-500 hover:bg-red-500/20 border border-red-500/20",
    },
    {
      label: "⌫",
      value: "BACKSPACE",
      class:
        "btn-del bg-surface text-text/60 hover:bg-accent-hover border border-text/5",
    },
    {
      label: "|x|",
      value: "ABSOLUTE",
      class:
        "btn-abs bg-surface text-text/60 hover:bg-accent-hover border border-text/5",
    },
    {
      label: "÷",
      value: "/",
      class:
        "btn-div bg-system/10 text-system hover:bg-system/20 border border-system/10 text-xl",
    },

    {
      label: "7",
      value: "7",
      class:
        "btn-7 bg-secondary/50 hover:bg-secondary text-text border border-text/5",
    },
    {
      label: "8",
      value: "8",
      class:
        "btn-8 bg-secondary/50 hover:bg-secondary text-text border border-text/5",
    },
    {
      label: "9",
      value: "9",
      class:
        "btn-9 bg-secondary/50 hover:bg-secondary text-text border border-text/5",
    },
    {
      label: "×",
      value: "*",
      class:
        "btn-mul bg-system/10 text-system hover:bg-system/20 border border-system/10 text-xl",
    },

    {
      label: "4",
      value: "4",
      class:
        "btn-4 bg-secondary/50 hover:bg-secondary text-text border border-text/5",
    },
    {
      label: "5",
      value: "5",
      class:
        "btn-5 bg-secondary/50 hover:bg-secondary text-text border border-text/5",
    },
    {
      label: "6",
      value: "6",
      class:
        "btn-6 bg-secondary/50 hover:bg-secondary text-text border border-text/5",
    },
    {
      label: "−",
      value: "-",
      class:
        "btn-sub bg-system/10 text-system hover:bg-system/20 border border-system/10 text-xl",
    },

    {
      label: "1",
      value: "1",
      class:
        "btn-1 bg-secondary/50 hover:bg-secondary text-text border border-text/5",
    },
    {
      label: "2",
      value: "2",
      class:
        "btn-2 bg-secondary/50 hover:bg-secondary text-text border border-text/5",
    },
    {
      label: "3",
      value: "3",
      class:
        "btn-3 bg-secondary/50 hover:bg-secondary text-text border border-text/5",
    },
    {
      label: "+",
      value: "+",
      class:
        "btn-add bg-system/10 text-system hover:bg-system/20 border border-system/10 text-xl",
    },

    {
      label: "0",
      value: "0",
      class:
        "btn-0 bg-secondary/50 hover:bg-secondary text-text border border-text/5",
    },
    {
      label: ".",
      value: ".",
      class:
        "btn-dot bg-secondary/50 hover:bg-secondary text-text border border-text/5",
    },
    {
      label: "=",
      value: "CALCULATE",
      class:
        "btn-eq bg-system text-white hover:bg-system-hover shadow-lg shadow-system/20 text-xl font-bold",
    },
  ];
}
