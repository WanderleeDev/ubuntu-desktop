import { NgOptimizedImage } from "@angular/common";
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
} from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { BtnBasicComponent } from "../../../../shared/components/btn-basic/btn-basic.component";
import { RouterLink } from "@angular/router";
import { ScreenLockComponent } from "../screen-lock/screen-lock.component";

@Component({
  selector: "app-login-form",
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgOptimizedImage,
    BtnBasicComponent,
    RouterLink,
    ScreenLockComponent,
  ],
  templateUrl: "./login form.component.html",
  styleUrl: "./login form.component.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFormComponent {
  isReadyToNavigate = signal<boolean>(false);
  isPasswordInput = signal<boolean>(true);
  inputTypeStream = computed(() =>
    this.isPasswordInput() ? "password" : "text"
  );
  iconTypeStream = computed(() =>
    this.isPasswordInput() ? "blind-eye.svg" : "eye.svg"
  );
  labelStream = computed(() =>
    this.isPasswordInput() ? "Show password" : "Hide password"
  );
  formLogin: FormGroup;

  constructor(private readonly fb: FormBuilder) {
    this.formLogin = this.fb.nonNullable.group({
      password: [
        "",
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/),
        ],
      ],
    });
  }

  public toggleInputType(): void {
    this.isPasswordInput.update((prev) => !prev);
  }

  public onSubmit(): void {
    if (this.formLogin.invalid) return;

    console.log(this.formLogin.value);
    this.isReadyToNavigate.set(true);
  }
}
