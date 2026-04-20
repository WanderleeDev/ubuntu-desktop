import { inject, Injectable } from "@angular/core";
// import { CachingService } from "../../../../shared/services/caching.service";
import { evaluate, abs, MathType } from "mathjs";
import { expressionFormatter } from "../utils/expressionFormatter";
// import { errorHandler } from "../../../../shared/utils/errorToastHandler";

const errorHandler = (e: any) => String(e);
class CachingService {
  saveDataCaching(k: any, v: any) {}
  getDataCaching<K, V>(k: K): V | null { return null; }
}
import { Record } from "../store/model/calculator.state";
import {
  EvalResponse,
  NewDataRecord,
} from "../interfaces/CalculatorControl.interface";
import { calculatorValidator } from "../utils/calculatorValidation";

@Injectable()
export class CalculatorManagerService {
  #cachingSvc = new CachingService();

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

    const dataCaching = this.searchCachingData(prettifierExpression);

    if (dataCaching !== null) {
      evalResponse.result = this.verifyAbsoluteValue(
        obtainAbsolute,
        dataCaching
      );

      return evalResponse;
    }

    try {
      const result = obtainAbsolute
        ? abs(evaluate(prettifierExpression))
        : evaluate(prettifierExpression);
      this.#cachingSvc.saveDataCaching(prettifierExpression, result);
      evalResponse.result = result;

      return evalResponse;
    } catch (e) {
      evalResponse.error = errorHandler(e);
      return evalResponse;
    }
  }

  private verifyAbsoluteValue(isAbs = false, value: number) {
    if (!isAbs) return value;

    return abs(value);
  }

  public backHistory(record: Record[]): NewDataRecord {
    return {
      lastDelete: record.slice(-1)[0],
      newRecords: record.slice(0, -1),
    };
  }

  public absoluteValue(number: number): number {
    try {
      const result = abs(number);
      return result;
    } catch (e) {
      throw new Error(errorHandler(e));
    }
  }

  private searchCachingData(expression: string): number | null {
    return this.#cachingSvc.getDataCaching<string, number>(expression);
  }
}
