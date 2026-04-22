import { Injectable, inject } from "@angular/core";
import { AuthRepository } from "../domain/auth.repository";
import { LoginPayload, Token } from "../domain/token.model";

@Injectable({
  providedIn: "root",
})
export class LoginUseCase {
  private readonly authRepository = inject(AuthRepository);

  execute(payload: LoginPayload): Promise<Token> {
    return this.authRepository.login(payload);
  }
}
