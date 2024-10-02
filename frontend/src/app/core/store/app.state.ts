import { ActionReducerMap } from "@ngrx/store";
import { ITranslatorState } from "./models/translator.state";
import { translatorReducer } from "./reducers/translator.reducers";
import { TranslatorEffects } from "./effects/translator.effects";
import { IAppIconsState } from "./models/app-icons.state";
import { appIconsReducer } from "./reducers/app-icons.reducers";
import { AppIconsEffects } from "./effects/app-icons.effects";

export interface AppState {
  translatorState: ITranslatorState;
  appIconsState: IAppIconsState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  translatorState: translatorReducer,
  appIconsState: appIconsReducer,
};

export const ALL_EFFECTS = [TranslatorEffects, AppIconsEffects];
