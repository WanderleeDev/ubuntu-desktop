import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  signal,
} from "@angular/core";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { RouterLink } from "@angular/router";
import { AuthStore } from "../../../infrastructure/auth.store";
import { ScreenLock } from "../screen-lock/screen-lock";

@Component({
  selector: "app-login-form",
  imports: [ReactiveFormsModule, RouterLink, ScreenLock],
  templateUrl: "./login form.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginForm {
  private readonly fb = inject(FormBuilder);
  public readonly authStore = inject(AuthStore);

  isReadyToNavigate = signal<boolean>(false);
  isPasswordInput = signal<boolean>(true);

  inputTypeStream = computed(() =>
    this.isPasswordInput() ? "password" : "text"
  );

  labelStream = computed(() =>
    this.isPasswordInput() ? "Show password" : "Hide password"
  );

  formLogin = this.fb.nonNullable.group({
    password: [
      "",
      [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/),
      ],
    ],
  });

  public toggleInputType(): void {
    this.isPasswordInput.update(prev => !prev);
  }

  public async onSubmit(): Promise<void> {
    if (this.formLogin.invalid) return;

    const { password } = this.formLogin.getRawValue();
    await this.authStore.login({ password, username: "wanderlee" });

    if (this.authStore.isAuthenticated()) {
      this.isReadyToNavigate.set(true);
    }
  }
}
