import { ChangeDetectionStrategy, Component, model } from "@angular/core";

@Component({
  selector: "app-switch",
  standalone: true,
  template: `
    <button
      type="button"
      (click)="toggle()"
      [class]="
        'relative w-11 h-6 rounded-full transition-colors duration-200 focus:outline-none ' +
        (checked() ? 'bg-system' : 'bg-white/10')
      ">
      <div
        [class]="
          'absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform duration-200 ' +
          (checked() ? 'translate-x-5' : 'translate-x-0')
        "></div>
    </button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwitchComponent {
  checked = model<boolean>(false);

  toggle(): void {
    this.checked.set(!this.checked());
  }
}
