import { Injectable, inject, PLATFORM_ID } from "@angular/core";
import { isPlatformBrowser } from "@angular/common";

@Injectable({
  providedIn: "root",
})
export class StorageService {
  private readonly platformId = inject(PLATFORM_ID);

  public setItem(key: string, value: unknown): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }

  public getItem<T>(key: string): T | null {
    if (isPlatformBrowser(this.platformId)) {
      const item = localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : null;
    }
    return null;
  }

  public removeItem(key: string): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem(key);
    }
  }

  public clear(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.clear();
    }
  }
}
