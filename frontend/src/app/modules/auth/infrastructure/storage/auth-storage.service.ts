import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AuthStorageService {
  private readonly TOKEN_KEY = "auth_token";

  public saveToken(token: string): void {
    if (typeof window !== "undefined") {
      localStorage.setItem(this.TOKEN_KEY, token);
    }
  }

  public getToken(): string | null {
    if (typeof window !== "undefined") {
      return localStorage.getItem(this.TOKEN_KEY);
    }
    return null;
  }

  public removeToken(): void {
    if (typeof window !== "undefined") {
      localStorage.removeItem(this.TOKEN_KEY);
    }
  }
}
