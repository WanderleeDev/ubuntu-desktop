import { Injectable } from "@angular/core";
import { ComponentStore } from "@ngrx/component-store";
import { PaintState } from "../interfaces/IPaintState.interface";
import { strokeAction, paintStateDTO } from "../types/paint.types";
import { Observable, Subscription } from "rxjs";

@Injectable()
export class PaintStore extends ComponentStore<PaintState> {
  hasColorBarSelector$ = this.select(state => state.hasColorBar);
  hasExtraBarSelector$ = this.select(state => state.hasExtraBar);
  hasFullScreenSelector$ = this.select(state => state.hasFullScreen);
  hasStrokeMenu = this.select(state => state.hasStrokeMenu);
  currentColorSelector$ = this.select(state => state.currentColor);
  strokeWidthSelector$ = this.select(state => state.strokeWidth);

  constructor() {
    super({
      hasColorBar: false,
      hasExtraBar: false,
      hasFullScreen: false,
      hasStrokeMenu: false,
      currentColor: "#000000",
      strokeWidth: 1,
    });
  }

  readonly toggleFullscreen = this.toggleState("hasFullScreen");
  readonly toggleColorBar = this.toggleState("hasColorBar");
  readonly toggleExtraBar = this.toggleState("hasExtraBar");
  readonly toggleStrokeMenu = this.toggleState("hasStrokeMenu");
  readonly setStrokeWidth = this.updateStrokeWidth();

  public setColor(color: string): void {
    this.patchState({ currentColor: color });
  }

  private updateStrokeWidth(): (
    observableOrValue: strokeAction | Observable<strokeAction>
  ) => Subscription {
    return this.updater((state, action: strokeAction): PaintState => {
      const widthStroke =
        action === "increment" ? state.strokeWidth + 1 : state.strokeWidth - 1;

      return {
        ...state,
        strokeWidth: Math.min(Math.max(widthStroke, 1), 50),
      };
    });
  }

  private toggleState(key: keyof paintStateDTO): () => void {
    return this.updater(
      (state): PaintState => ({
        ...state,
        [key]: !state[key],
      })
    );
  }
}
