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
        'text-text/20 cursor-not-allowed': isDisabled(),
        'text-text/70 hover:bg-text/10 hover:text-text': !isDisabled(),
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
export class CalculatorUndoBtn {
  isDisabled = input.required<boolean>();
}
