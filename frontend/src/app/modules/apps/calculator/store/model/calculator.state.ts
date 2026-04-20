export interface CalculatorState {
  result: null | number;
  expression: string;
  record: Record[];
  error: null | string;
  numOperations: number;
  hasAbsoluteFn: boolean;
}

export interface Record {
  expression: string;
  result: number;
}
