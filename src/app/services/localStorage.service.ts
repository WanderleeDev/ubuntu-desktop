import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class LocalStorageService {
  public setInLocalStorage<T>(data: T, key: string) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  public getLocalStorage<T>(key: string): T | null {
    try {
      const backUp: string | null = localStorage.getItem(key);
      if (!backUp) return null;
      return JSON.parse(backUp) as T;
    } catch (e) {
      if (e instanceof Error) console.error(e.message);
      return null;
    }
  }

  public clearLocalStorage(): void {
    localStorage.clear();
  }
}
