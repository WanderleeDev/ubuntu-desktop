import { ChangeDetectionStrategy, Component, input } from "@angular/core";
import { NgClass } from "@angular/common";

@Component({
  selector: "app-calculator-undo-btn",
  imports: [NgClass],
  template: `
    <button
      type="button"
      [disabled]="isDisabled()"
      class="flex items-center justify-center p-1.5 rounded-md transition-all duration-200"
      [ngClass]="{
        'text-black/20 dark:text-white/20 cursor-not-allowed': isDisabled(),
        'text-black/70 dark:text-white/70 hover:bg-black/10 dark:hover:bg-white/10 hover:text-black dark:hover:text-white':
          !isDisabled(),
      }"
      title="Deshacer última operación">
      <span class="material-symbols-outlined text-[20px]">history</span>
    </button>
  `,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalculatorUndoBtnComponent {
  isDisabled = input.required<boolean>();
}
