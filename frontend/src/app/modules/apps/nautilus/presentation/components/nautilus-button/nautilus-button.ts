import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  Injector,
  input,
} from "@angular/core";
import { Router } from "@angular/router";
import { BUTTON_STYLES, ButtonVariant } from "./nautilus-button.styles";

@Component({
  selector: "app-nautilus-button",
  imports: [],
  templateUrl: "./nautilus-button.html",
  styles: `
    :host {
      display: inline-block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NautilusButton {
  readonly #injector = inject(Injector);

  label = input.required<string>();
  icon = input<string>();
  variant = input<ButtonVariant>("secondary");
  type = input<"button" | "submit" | "reset">("button");
  routerLink = input<string | string[]>();
  disabled = input<boolean>(false);

  protected buttonClasses = computed(() => {
    return `${BUTTON_STYLES.base} ${BUTTON_STYLES[this.variant()]}`;
  });

  protected handleClick(): void {
    if (this.disabled()) return;

    const link = this.routerLink();
    if (link) {
      const router = this.#injector.get(Router);
      if (Array.isArray(link)) {
        router.navigate(link);
      } else {
        router.navigateByUrl(link);
      }
    }
  }
}
