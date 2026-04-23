import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
  input,
} from "@angular/core";
import { Router } from "@angular/router";

import { Loader } from "../../../../../shared/components/loader/loader";

@Component({
  selector: "app-screen-lock",
  standalone: true,
  imports: [Loader],
  templateUrl: "./screen-lock.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScreenLock implements AfterViewInit {
  readonly #router = inject(Router);
  readonly #destroyRef = inject(DestroyRef);
  readonly #DURATION = 2000;

  redirectRoute = input.required<string>();
  timer?: NodeJS.Timeout;

  ngAfterViewInit(): void {
    this.timer = setTimeout(() => this.redirectTo(), this.#DURATION);

    this.#destroyRef.onDestroy(() => {
      if (this.timer) clearTimeout(this.timer);
    });
  }

  private redirectTo(): void {
    this.#router.navigate([this.redirectRoute() || "/home"]);
  }
}
