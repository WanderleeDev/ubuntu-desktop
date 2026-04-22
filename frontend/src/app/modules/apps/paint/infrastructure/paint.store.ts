import { patchState, signalStore, withMethods, withState } from "@ngrx/signals";
import { PaintState, strokeAction } from "../domain/paint.model";

const initialState: PaintState = {
  hasColorBar: false,
  hasExtraBar: false,
  hasFullScreen: false,
  hasStrokeMenu: false,
  currentColor: "#000",
  strokeWidth: 2,
  clearSignal: 0,
  downloadSignal: 0,
};

export const PaintStore = signalStore(
  withState(initialState),
  withMethods(store => ({
    toggleFullscreen(): void {
      patchState(store, { hasFullScreen: !store.hasFullScreen() });
    },
    toggleColorBar(): void {
      patchState(store, { hasColorBar: !store.hasColorBar() });
    },
    toggleExtraBar(): void {
      patchState(store, { hasExtraBar: !store.hasExtraBar() });
    },
    toggleStrokeMenu(): void {
      patchState(store, { hasStrokeMenu: !store.hasStrokeMenu() });
    },
    setColor(color: string): void {
      patchState(store, { currentColor: color });
    },
    setStrokeWidth(action: strokeAction) {
      if (action === "increment") {
        patchState(store, state => ({
          strokeWidth: Math.min(state.strokeWidth + 1, 50),
        }));
      } else {
        patchState(store, state => ({
          strokeWidth: Math.max(1, state.strokeWidth - 1),
        }));
      }
    },
    selectEraser() {
      patchState(store, { currentColor: "#FFFFFF" });
    },
    clearAll() {
      patchState(store, state => ({
        clearSignal: state.clearSignal + 1,
        currentColor: "#000000",
      }));
    },
    download() {
      patchState(store, state => ({
        downloadSignal: state.downloadSignal + 1,
      }));
    },
  }))
);
