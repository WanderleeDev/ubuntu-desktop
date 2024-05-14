import { ActionReducerMap } from "@ngrx/store";
import { ITranslatorState } from "./models/translator.state";
import { translatorReducer } from "./reducers/translator.reducer";
import { TranslatorEffects } from "./effects/translator.effects";


export interface AppState {
  translatorState: ITranslatorState
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  translatorState: translatorReducer
}

export const ALL_EFFECTS = [TranslatorEffects]
