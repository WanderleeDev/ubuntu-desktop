import { computed, inject } from "@angular/core";
import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withProps,
  withState,
} from "@ngrx/signals";
import {
  ActionLanguageType,
  LanguageOptions,
  TranslationState,
} from "../domain/translation.model";
import { TranslateTextUseCase } from "../use-cases/translate-text.use-case";

export interface TranslatorStoreState {
  textBase: string;
  translation: string;
  error: string | null;
  loading: boolean;
  languageFrom: string;
  languageTo: string;
}

const initialState: TranslatorStoreState = {
  textBase: "",
  translation: "",
  error: null,
  loading: false,
  languageFrom: "Spanish",
  languageTo: "English",
};

export const TranslatorStore = signalStore(
  withState(initialState),

  withProps(() => ({
    _translateUseCase: inject(TranslateTextUseCase),
  })),

  withComputed(
    ({ textBase, translation, error, loading, languageFrom, languageTo }) => ({
      translationState: computed<TranslationState>(() => ({
        textBase: textBase(),
        translation: translation(),
        error: error(),
        loading: loading(),
      })),

      languageOptions: computed<LanguageOptions>(() => ({
        from: languageFrom(),
        to: languageTo(),
      })),
    })
  ),

  withMethods(store => ({
    updateTextBase(text: string): void {
      patchState(store, { textBase: text });
    },

    updateLanguage(key: ActionLanguageType, value: string): void {
      if (key === "from") patchState(store, { languageFrom: value });
      else patchState(store, { languageTo: value });
    },

    async translate(): Promise<void> {
      patchState(store, { loading: true, error: null, translation: "" });
      try {
        const stream = store._translateUseCase.execute(
          store.textBase(),
          store.languageFrom(),
          store.languageTo()
        );
        for await (const chunk of stream) {
          patchState(store, { translation: store.translation() + chunk });
        }
      } catch (e) {
        patchState(store, { error: String(e) });
      } finally {
        patchState(store, { loading: false });
      }
    },
  }))
);
