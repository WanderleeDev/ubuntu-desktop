import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { ITranslatorState } from "../models/translator.state";

const selectTranslatorFeature = (state: AppState): ITranslatorState =>
  state.translatorState;

const selectTranslationState = createSelector(
  selectTranslatorFeature,
  (state: ITranslatorState) => state
);

const selectLoading = createSelector(
  selectTranslatorFeature,
  (state: ITranslatorState) => state.loading
);

const selectTranslation = createSelector(
  selectTranslatorFeature,
  (state: ITranslatorState) => state.translation
);

const selectCurrentTextLength = createSelector(
  selectTranslatorFeature,
  (state: ITranslatorState) => state.text.length
);

export const TRANSLATOR_SELECTORS = {
  selectLoading,
  selectTranslationState,
  selectTranslation,
  selectCurrentTextLength,
};
