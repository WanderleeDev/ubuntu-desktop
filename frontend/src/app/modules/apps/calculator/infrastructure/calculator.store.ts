import { inject } from "@angular/core";
import { patchState, signalStore, withMethods, withState } from "@ngrx/signals";
import { CalculatorState, ICalculatorRecord } from "../domain/calculator.model";
import { CalculatorManagerService } from "../services/calculator-manager.service";

const initialState: CalculatorState = {
  expression: "",
  result: null,
  error: null,
  record: [],
  numOperations: 0,
  hasAbsoluteFn: false,
};

export const CalculatorStore = signalStore(
  withState(initialState),
  withMethods((store, managerSvc = inject(CalculatorManagerService)) => ({
    updateExpression(value: string): void {
      patchState(store, state => ({
        expression: state.expression + value,
        error: null,
      }));
    },
    deleteLastCharacter(): void {
      patchState(store, state => ({
        expression: state.expression.slice(0, -1),
        error: null,
      }));
    },

    setExpression(value: string): void {
      patchState(store, { expression: value, error: null });
    },
    clearExpression(): void {
      patchState(store, { expression: "", result: null, error: null });
    },
    toggleAbsoluteFn(): void {
      patchState(store, state => ({ hasAbsoluteFn: !state.hasAbsoluteFn }));
    },
    executeOperation(): void {
      const { error, result } = managerSvc.calculateResult(
        store.expression(),
        store.hasAbsoluteFn()
      );

      if (error) {
        patchState(store, { error });
      } else {
        const newRecord: ICalculatorRecord = {
          expression: store.expression(),
          result: result as number,
        };

        patchState(store, state => ({
          result: result as number,
          numOperations: state.numOperations + 1,
          record: [...state.record, newRecord],
          expression: String(result),
          error: null,
        }));
      }
    },
    undoHistory(): void {
      const records = store.record();
      if (records.length === 0) return;

      const { lastDelete, newRecords } = managerSvc.backHistory(records);

      patchState(store, {
        record: newRecords,
        expression: lastDelete.expression,
        result: null,
        error: null,
      });
    },
    clearHistory(): void {
      patchState(store, { record: [] });
    },
  }))
);
