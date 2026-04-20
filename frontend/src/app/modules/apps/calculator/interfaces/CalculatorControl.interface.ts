import { Record } from "../store/model/calculator.state";

export interface CalculatorControl {
  character: string;
  label: string;
  code?: string;
}

export interface EvalResponse {
  result: number;
  error: string | null;
}

export interface NewDataRecord {
  lastDelete: Record;
  newRecords: Record[];
}
