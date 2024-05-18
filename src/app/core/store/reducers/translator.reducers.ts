import { createReducer, on } from "@ngrx/store";
import { ITranslatorState } from "../models/translator.state";
import { TRANSLATOR_ACTIONS } from "../actions/translator.actions";

export const initialState: ITranslatorState = {
  from: "Spanish",
  to: "English",
  text: "",
  translation: "",
  error: null,
  loading: false,
  history: [],
};

export const translatorReducer = createReducer(
  initialState,
  on(
    TRANSLATOR_ACTIONS.translateText,
    (state): ITranslatorState => ({ ...state, loading: true })
  ),
  on(
    TRANSLATOR_ACTIONS.translateTextSuccess,
    (state): ITranslatorState => ({ ...state, loading: false })
  ),
  on(
    TRANSLATOR_ACTIONS.translateTextFailure,
    (state, { error }): ITranslatorState => ({
      ...state,
      error,
      loading: false,
    })
  ),
  on(
    TRANSLATOR_ACTIONS.saveText,
    (state, { text }): ITranslatorState => ({ ...state, text })
  ),
  on(
    TRANSLATOR_ACTIONS.saveTranslation,
    (state, { translation }): ITranslatorState => ({ ...state, translation })
  ),
  on(
    TRANSLATOR_ACTIONS.setLanguage,
    (state, { language, action }): ITranslatorState => {
      console.log(language, action);
      
      return action === "from"
        ? { ...state, from: language }
        : { ...state, to: language };
    }
  )
);
