import { Injectable } from "@angular/core";
import { evaluate, abs } from "mathjs";
import { expressionFormatter } from "../infrastructure/utils/expressionFormatter";
import { calculatorValidator } from "../infrastructure/utils/calculatorValidation";
import { ICalculatorRecord } from "../domain/calculator.model";

const errorHandler = (e: unknown): string => String(e);

export interface EvalResponse {
  result: number | null;
  error: string | null;
}

@Injectable()
export class CalculatorManagerService {
  public calculateResult(
    expression: string,
    obtainAbsolute = false
  ): EvalResponse {
    const evalResponse: EvalResponse = {
      result: 0,
      error: null,
    };

    if (!expression.trim()) {
      evalResponse.error = "Empty Expression";
      return evalResponse;
    }

    const prettifierExpression = expressionFormatter(expression);

    if (!calculatorValidator(prettifierExpression)) {
      evalResponse.error = "Malformed expression";
      return evalResponse;
    }

    try {
      const result = obtainAbsolute
        ? abs(evaluate(prettifierExpression))
        : evaluate(prettifierExpression);
      evalResponse.result = result;
      return evalResponse;
    } catch (e) {
      evalResponse.error = errorHandler(e);
      return evalResponse;
    }
  }

  public backHistory(record: ICalculatorRecord[]): {
    lastDelete: ICalculatorRecord;
    newRecords: ICalculatorRecord[];
  } {
    return {
      lastDelete: record.slice(-1)[0],
      newRecords: record.slice(0, -1),
    };
  }
}
