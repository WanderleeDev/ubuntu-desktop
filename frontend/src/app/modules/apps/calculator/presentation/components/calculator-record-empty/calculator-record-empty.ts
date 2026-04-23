import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-calculator-record-empty",
  imports: [],
  template: `
    <div
      class="flex flex-col items-center justify-center p-3 opacity-20 select-none">
      <span class="material-symbols-outlined text-[32px] mb-1">history</span>
      <p class="text-[9px] font-medium uppercase tracking-widest text-center">
        Empty
      </p>
    </div>
  `,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalculatorRecordEmpty {}
