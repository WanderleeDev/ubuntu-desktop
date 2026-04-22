import { LoginPayload, Token } from "./token.model";

export abstract class AuthRepository {
  abstract login(payload: LoginPayload): Promise<Token>;
  abstract register(data: unknown): Promise<void>;
  abstract logout(): Promise<void>;
}
