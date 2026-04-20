import { ChangeDetectionStrategy, Component, input } from "@angular/core";

@Component({
  selector: "app-button-calculator",
  imports: [],
  template: `
    <button
      type="button"
      [attr.data-calculator]="value()"
      class="w-full h-full py-3 rounded-lg text-lg font-semibold transition-all duration-200 active:scale-95 flex items-center justify-center bg-inherit text-inherit"
    >
      {{ label() }}
    </button>
  `,
  styles: `
    :host {
      display: block;
      height: 100%;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonCalculatorComponent {
  label = input.required<string>();
  value = input.required<string>();
}
