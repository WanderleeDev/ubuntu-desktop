import { Injectable, inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { APP_ICONS_ACTIONS } from "../actions/app-icons.actions";
import { catchError, combineLatest, exhaustMap, map, of } from "rxjs";
import { AppsIconsService } from "../../../modules/desktop/services/app-icons.service";

@Injectable()
export class AppIconsEffects {
  readonly #actions$ = inject(Actions);
  readonly #appsIconsSvc = inject(AppsIconsService);

  public loadAllAppIcons = createEffect(() => {
    return this.#actions$.pipe(
      ofType(APP_ICONS_ACTIONS.loadAllApps),
      exhaustMap(() =>
        combineLatest([
          this.#appsIconsSvc.getDesktopIcons(),
          this.#appsIconsSvc.getSideBarMainIcons(),
          this.#appsIconsSvc.getSideBarSecondaryIcons(),
        ])
      ),
      map(([desktop, sideBarMainIcons, sideBarSecondaryIcons]) => {
        return APP_ICONS_ACTIONS.loadAllAppsSuccess({
          desktop,
          sideBarMainIcons,
          sideBarSecondaryIcons,
        });
      }),
      //  TODO: Implement a modal that displays the error
      catchError((e) => (e instanceof Error ? of() : of()))
    );
  });
}
