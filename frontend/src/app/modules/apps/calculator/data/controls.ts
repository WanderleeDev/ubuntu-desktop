import { CalculatorControl } from "../interfaces/CalculatorControl.interface";

export const controls: CalculatorControl[] = [
  {
    character: "C",
    label: "Clear Display",
  },
  {
    character: "(",
    label: "Start Group",
  },
  {
    character: ")",
    label: "End Group",
  },
  {
    character: "mod",
    label: "Modulus Divide",
  },
  {
    character: "| 𝑥 |",
    label: "Absolute",
  },
  {
    character: "7",
    label: "7",
  },
  {
    character: "8",
    label: "8",
  },
  {
    character: "9",
    label: "9",
  },
  {
    character: "÷",
    label: "Divide",
  },
  {
    character: "π",
    code: "3.1415",
    label: "Pi",
  },
  {
    character: "4",
    label: "4",
  },
  {
    character: "5",
    label: "5",
  },
  {
    character: "6",
    label: "6",
  },
  {
    character: "×",
    label: "Multiply",
  },
  {
    character: "x²",
    label: "Square",
    code: "²",
  },
  {
    character: "1",
    label: "1",
  },
  {
    character: "2",
    label: "2",
  },
  {
    character: "3",
    label: "3",
  },
  {
    character: "-",
    label: "Subtract",
  },
  {
    character: "=",
    label: "Calculate Result",
  },
  {
    character: "0",
    label: "0",
  },
  {
    character: ".",
    label: ".",
  },
  {
    character: "%",
    label: "Percentage",
  },
  {
    character: "+",
    label: "Add",
  },
] as const;

export const keys = {
  "×": "*",
  "X": "*",
  "x": "*",
  "ₓ": "*",
  "÷": "/",
  "²": "^ 2",
  "mod": "%",
  "π": "3.14",
} as const;
