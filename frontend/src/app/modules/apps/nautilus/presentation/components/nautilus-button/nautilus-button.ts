import { NgTemplateOutlet } from "@angular/common";
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from "@angular/core";

const BUTTON_STYLES = {
  base: "flex items-center gap-2 transition-all active:scale-95 font-bold text-xs uppercase tracking-wider rounded-xl cursor-pointer select-none",
  primary:
    "px-6 py-2.5 bg-system hover:bg-system-active text-white shadow-lg shadow-system/20",
  secondary:
    "px-4 py-2 bg-system/10 hover:bg-system/20 text-system border border-system/20",
};

@Component({
  selector: "app-nautilus-button",
  templateUrl: "./nautilus-button.html",
  imports: [NgTemplateOutlet],
  styles: `
    :host {
      display: inline-block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NautilusButton {
  label = input.required<string>();
  icon = input<string>();
  variant = input<"primary" | "secondary">("secondary");
  type = input<"button" | "submit" | "reset">("button");
  href = input<string>();
  target = input<string>("_self");

  protected buttonClasses = computed(() => {
    return `${BUTTON_STYLES.base} ${BUTTON_STYLES[this.variant()]}`;
  });
}
