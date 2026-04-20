export interface CalculatorState {
  result: null | number;
  expression: string;
  record: ICalculatorRecord[];
  error: null | string;
  numOperations: number;
  hasAbsoluteFn: boolean;
}

export interface ICalculatorRecord {
  expression: string;
  result: number;
}

export interface CalculatorControl {
  character: string;
  label: string;
  code?: string;
}

export enum CalculatorAction {
  NUMBER = "NUMBER",
  OPERATOR = "OPERATOR",
  FUNCTION = "FUNCTION",
  CLEAR = "CLEAR",
  EQUALS = "EQUALS",
  BACKSPACE = "BACKSPACE",
}
