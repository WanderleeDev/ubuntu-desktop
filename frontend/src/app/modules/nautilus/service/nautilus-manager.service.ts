import { Injectable } from "@angular/core";
import {
  BehaviorSubject,
  distinctUntilChanged,
  Observable,
  throwError,
} from "rxjs";
import { Settings } from "../interfaces/paths.emun";

@Injectable({
  providedIn: "root",
})
export class NautilusManagerService {
  currentRoute$ = new BehaviorSubject<Settings>(Settings.BACKGROUND);

  public getCurrentRouteObservable(): Observable<Settings> {
    return this.currentRoute$.asObservable().pipe(distinctUntilChanged());
  }

  public setCurrentRoute(route: Settings): Observable<never> | void {
    const isValidRoute = Object.values(Settings).includes(route);

    if (!isValidRoute) {
      return throwError(() => new Error("Invalid route"));
    }

    this.currentRoute$.next(route);
  }

  public getCurrentRoute(): Settings {
    return this.currentRoute$.getValue();
  }
}
