import { ChangeDetectionStrategy, Component, input } from "@angular/core";

@Component({
  selector: "app-check-badge",
  standalone: true,
  template: `
    <div
      [class]="
        className() +
        ' w-5 h-5 flex items-center justify-center rounded-full text-white shadow-lg'
      "
      [style.background-color]="color()">
      <span class="material-symbols-outlined text-[12px] font-bold">check</span>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckBadgeComponent {
  className = input<string>("absolute top-2 right-2");
  color = input<string>("var(--color-system)");
}
