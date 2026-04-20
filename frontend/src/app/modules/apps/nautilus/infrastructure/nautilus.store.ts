import { patchState, signalStore, withMethods, withState } from "@ngrx/signals";
import { NautilusSection, NautilusState } from "../domain/nautilus.model";

const initialState: NautilusState = {
  currentSection: NautilusSection.BACKGROUND,
  isLoading: false,
  error: null,
};

export const NautilusStore = signalStore(
  withState(initialState),
  withMethods((store) => ({
    setSection(section: NautilusSection): void {
      patchState(store, { currentSection: section, error: null });
    },
    setLoading(isLoading: boolean): void {
      patchState(store, { isLoading });
    },
    setError(error: string | null): void {
      patchState(store, { error, isLoading: false });
    }
  }))
);
