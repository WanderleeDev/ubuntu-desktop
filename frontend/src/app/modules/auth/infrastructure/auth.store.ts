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
import { AuthStorageService } from "./storage/auth-storage.service";

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

export const AuthStore = signalStore(
  { providedIn: "root" },
  withState(initialState),

  withProps(() => ({
    _loginUseCase: inject(LoginUseCase),
    _registerUseCase: inject(RegisterUseCase),
    _storage: inject(AuthStorageService),
  })),

  withHooks({
    onInit(store) {
      const token = store._storage.getToken();
      if (token) patchState(store, { token });
    },
  }),

  withComputed(({ token }) => ({
    isAuthenticated: computed(() => !!token()),
  })),

  withMethods(store => ({
    async login(payload: LoginPayload) {
      patchState(store, { loading: true, error: null });
      try {
        const response = await store._loginUseCase.execute(payload);
        patchState(store, {
          token: response.accessToken,
          loading: false,
        });
        store._storage.saveToken(response.accessToken);
      } catch (error: any) {
        patchState(store, {
          error: error.message || "Login failed",
          loading: false,
        });
      }
    },

    async register(data: any) {
      patchState(store, { loading: true, error: null });
      try {
        const response = await store._registerUseCase.execute(data);
      } catch (error: any) {
        patchState(store, {
          error: error.message || "Registration failed",
        });
      } finally {
      }
    },

    logout() {
      store._storage.removeToken();
      patchState(store, initialState);
    },

    loadToken() {
      const token = store._storage.getToken();
      if (token) {
        patchState(store, { token });
      }
    },
  }))
);
