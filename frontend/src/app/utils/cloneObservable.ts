import { Observable, map } from "rxjs";

export function cloneObservableArray<T>(
  observable: Observable<T[]>
): Observable<T[]> {
  return observable.pipe(map(value => structuredClone(value)));
}
