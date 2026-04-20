import { ComponentStore, OnStateInit } from "@ngrx/component-store";
import { CalculatorState, Record } from "./model/calculator.state";
import { CalculatorManagerService } from "../services/calculator-manager.service";
import { Injectable } from "@angular/core";
import { tapResponse } from "@ngrx/operators";
// import { errorHandler } from "../../../../shared/utils/errorToastHandler";
const errorHandler = (e: any) => String(e);
import { combineLatest } from "rxjs";

@Injectable()
export class CalculatorStore
  extends ComponentStore<CalculatorState>
  implements OnStateInit
{
  readonly result$ = this.select(state => state.result);
  readonly record$ = this.select(state => state.record);
  readonly error$ = this.select(state => state.error);
  readonly expression$ = this.select(state => state.expression);
  readonly numOperations$ = this.select(state => state.numOperations);
  readonly hasAbsoluteFn$ = this.select(state => state.hasAbsoluteFn);

  constructor(private readonly calculatorManagerSvc: CalculatorManagerService) {
    super({
      expression: "",
      result: null,
      error: null,
      record: [],
      numOperations: 0,
      hasAbsoluteFn: false,
    });
  }

  ngrxOnStateInit(): void {
    this.executeOperationEffect();
  }

  readonly updateRecord = this.updater(
    (state): CalculatorState => ({
      ...state,
      record: [],
    })
  );

  readonly updateHasAbsoluteFn = this.updater(
    (state): CalculatorState => ({
      ...state,
      hasAbsoluteFn: !state.hasAbsoluteFn,
    })
  );

  readonly updateExpression = this.updater(
    (state, newExpression: string): CalculatorState => ({
      ...state,
      expression: `${state.expression}${newExpression}`,
      error: null,
    })
  );

  readonly executeOperation = this.updater((state): CalculatorState => {
    const { error, result } = this.calculatorManagerSvc.calculateResult(
      state.expression,
      state.hasAbsoluteFn
    );

    if (!error) {
      return {
        ...state,
        result,
        numOperations: state.numOperations + 1,
        record: [...state.record, { expression: state.expression, result }],
      };
    }

    return { ...state, error };
  });

  public backRecord(record: Record[]): void {
    if (record.length <= 0) return;

    const { lastDelete, newRecords } =
      this.calculatorManagerSvc.backHistory(record);

    this.patchState(state => ({
      ...state,
      record: newRecords,
      expression: lastDelete.expression,
    }));
  }

  public setExpression(value: string): void {
    this.patchState({ expression: value, error: null });
  }

  public setError(error: string | null): void {
    this.patchState({ error });
  }

  public clearExpression(): void {
    this.patchState({ expression: "", error: null });
  }

  readonly executeOperationEffect = this.effect(() =>
    combineLatest([this.result$, this.numOperations$]).pipe(
      tapResponse({
        next: ([result]) => {
          this.patchState({ expression: `${result ?? ""}`, error: null });
        },
        error: err => this.setError(errorHandler(err)),
      })
    )
  );
}
