import { patchState, signalStore, withMethods, withState } from "@ngrx/signals";
import { NautilusSection } from "../domain/nautilus.model";

interface NautilusState {
  currentSection: NautilusSection;
}

const initialState: NautilusState = {
  currentSection: "background",
};

export const NautilusStore = signalStore(
  withState(initialState),

  withMethods(store => ({
    setSection(section: NautilusSection): void {
      patchState(store, { currentSection: section });
    },
  }))
);
