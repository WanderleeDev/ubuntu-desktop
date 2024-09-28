import { inject, Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "../app.state";
import { TranslatorService } from "../../../modules/translator/services/translator.service";
import { TRANSLATOR_ACTIONS } from "../actions/translator.actions";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { concatLatestFrom } from "@ngrx/operators";
import { catchError, exhaustMap, map, of } from "rxjs";
import { TRANSLATOR_SELECTORS } from "../selectors/translator.selectors";
import { HttpErrorResponse } from "@angular/common/http";

@Injectable()
export class TranslatorEffects {
  readonly #store: Store<AppState> = inject(Store);
  readonly #actions$ = inject(Actions);
  readonly #translatorService: TranslatorService = inject(TranslatorService);

  public translateText = createEffect(() => {
    return this.#actions$.pipe(
      ofType(TRANSLATOR_ACTIONS.translateText),
      concatLatestFrom(() => [
        this.#store.select(TRANSLATOR_SELECTORS.selectTranslationState),
      ]),
      exhaustMap(
        async ([_, { from, to, text }]) =>
          await this.#translatorService.translateText(text, from, to)
      ),
      map(() => TRANSLATOR_ACTIONS.translateTextSuccess()),
      catchError((error: HttpErrorResponse) =>
        of(TRANSLATOR_ACTIONS.translateTextFailure({ error: error.message }))
      )
    );
  });
}
