import { computed, inject } from "@angular/core";
import {
  patchState,
  signalStore,
  withComputed,
  withHooks,
  withMethods,
  withProps,
  withState,
} from "@ngrx/signals";
import { LoginPayload } from "../domain/token.model";
import { LoginUseCase } from "../use-cases/login.use-case";
import { RegisterUseCase } from "../use-cases/register.use-case";
import { StorageService } from "../../../shared/services/storage.service";

export interface AuthState {
  token: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  token: null,
  loading: false,
  error: null,
};

const TOKEN_KEY = "auth_token";

export const AuthStore = signalStore(
  { providedIn: "root" },
  withState<AuthState>(initialState),

  withProps(() => ({
    _loginUseCase: inject(LoginUseCase),
    _registerUseCase: inject(RegisterUseCase),
    _storage: inject(StorageService),
  })),

  withHooks({
    onInit(store) {
      const token = store._storage.getItem<string>(TOKEN_KEY);
      if (token) patchState(store, { token });
    },
  }),

  withComputed(({ token }) => ({
    isAuthenticated: computed(() => !!token()),
  })),

  withMethods(store => ({
    async login(payload: LoginPayload): Promise<void> {
      patchState(store, { loading: true, error: null });
      try {
        const response = await store._loginUseCase.execute(payload);
        patchState(store, {
          token: response.accessToken,
          loading: false,
        });
        store._storage.setItem(TOKEN_KEY, response.accessToken);
      } catch (error: unknown) {
        const errorMessage =
          error instanceof Error ? error.message : "Login failed";
        patchState(store, {
          error: errorMessage,
          loading: false,
        });
      }
    },

    async register(data: unknown): Promise<void> {
      patchState(store, { loading: true, error: null });
      try {
        await store._registerUseCase.execute(data);
      } catch (error: unknown) {
        const errorMessage =
          error instanceof Error ? error.message : "Registration failed";
        patchState(store, {
          error: errorMessage,
        });
      }
    },

    logout(): void {
      store._storage.removeItem(TOKEN_KEY);
      patchState(store, initialState);
    },

    loadToken(): void {
      const token = store._storage.getItem<string>(TOKEN_KEY);
      if (token) {
        patchState(store, { token });
      }
    },
  }))
);
