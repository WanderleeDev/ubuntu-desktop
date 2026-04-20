import { Provider } from "@angular/core";
import { AuthRepository } from "../../modules/auth/domain/auth.repository";
import { MockAuthRepository } from "../../modules/auth/infrastructure/mock-auth.repository";

const providersAuth: Provider[] = [
  {
    provide: AuthRepository,
    useClass: MockAuthRepository,
  },
];

export default providersAuth;
