import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from "@angular/core";
import {
  BUTTON_STYLES,
  ButtonVariant,
} from "../nautilus-button/nautilus-button.styles";

@Component({
  selector: "app-nautilus-link",
  imports: [],
  templateUrl: "./nautilus-link.html",
  styles: `
    :host {
      display: inline-block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NautilusLink {
  label = input.required<string>();
  icon = input<string>();
  variant = input<ButtonVariant>("secondary");
  href = input.required<string>();
  target = input<string>("_blank");
  disabled = input<boolean>(false);

  protected buttonClasses = computed(() => {
    return `${BUTTON_STYLES.base} ${BUTTON_STYLES[this.variant()]}`;
  });

  protected handleClick(event: MouseEvent): void {
    if (this.disabled()) {
      event.preventDefault();
      event.stopPropagation();
    }
  }
}
