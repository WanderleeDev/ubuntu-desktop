import { createAction, props } from "@ngrx/store";

export const translateText = createAction("[Translator] Translate Text");

export const translateTextSuccess = createAction(
  "[Translator] Translate Text Success"
);

export const translateTextFailure = createAction(
  "[Translator] Translate Text Failure",
  props<{ error: string }>()
);

export const saveText = createAction(
  "[Translator] Save Text",
  props<{ text: string }>()
);

export  const saveTranslation =  createAction(
  "[Translator] Save Translation",
  props<{ translation: string }>()
)

export const setLanguage = createAction( 
  "[Translator] Select Language",
  props<{language: string, action: 'from' | 'to'}>()
)

export const TRANSLATOR_ACTIONS = {
  translateText,
  translateTextSuccess,
  translateTextFailure,
  saveText,
  saveTranslation,
  setLanguage
};
