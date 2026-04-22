import { Injectable, inject } from "@angular/core";
import { AuthRepository } from "../domain/auth.repository";

@Injectable({
  providedIn: "root",
})
export class RegisterUseCase {
  private readonly authRepository = inject(AuthRepository);

  execute(data: unknown): Promise<void> {
    return this.authRepository.register(data);
  }
}
