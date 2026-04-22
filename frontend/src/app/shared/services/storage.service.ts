import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class StorageService {
  public setItem<T>(key: string, value: T): void {
    if (typeof window !== "undefined") {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }

  public getItem<T>(key: string): T | null {
    if (typeof window !== "undefined") {
      const item = localStorage.getItem(key);
      try {
        return item ? (JSON.parse(item) as T) : null;
      } catch (e) {
        console.error("Error parsing storage item:", e);
        return null;
      }
    }
    return null;
  }

  public removeItem(key: string): void {
    if (typeof window !== "undefined") {
      localStorage.removeItem(key);
    }
  }

  public clear(): void {
    if (typeof window !== "undefined") {
      localStorage.clear();
    }
  }
}
