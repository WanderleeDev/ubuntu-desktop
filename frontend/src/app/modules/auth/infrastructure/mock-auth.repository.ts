import { Injectable } from "@angular/core";
import { AuthRepository } from "../domain/auth.repository";
import { LoginPayload, Token } from "../domain/token.model";

@Injectable({
  providedIn: "root",
})
export class MockAuthRepository implements AuthRepository {
  async login(payload: LoginPayload): Promise<Token> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          accessToken:
            "mock-jwt-token-" + Math.random().toString(36).substring(7),
        });
      }, 1000);
    });
  }

  async register(data: any): Promise<void> {
    return new Promise(resolve => {
      setTimeout(() => resolve(), 1000);
    });
  }

  async logout(): Promise<void> {
    return new Promise(resolve => {
      setTimeout(() => resolve(), 500);
    });
  }
}
