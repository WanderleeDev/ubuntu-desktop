import { Injectable } from "@angular/core";
import { AuthRepository } from "../domain/auth.repository";

import { LoginPayload, Token } from "../domain/token.model";

@Injectable({
  providedIn: "root",
})
export class LoginUseCase {
  constructor(private authRepository: AuthRepository) {}

  execute(payload: LoginPayload): Promise<Token> {
    return this.authRepository.login(payload);
  }
}
