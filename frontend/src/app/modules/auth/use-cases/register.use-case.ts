import { Injectable } from "@angular/core";
import { AuthRepository } from "../domain/auth.repository";

@Injectable({
  providedIn: "root",
})
export class RegisterUseCase {
  constructor(private authRepository: AuthRepository) {}

  execute(data: any): Promise<void> {
    return this.authRepository.register(data);
  }
}
