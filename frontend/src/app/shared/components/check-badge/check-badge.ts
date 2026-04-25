import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from "@angular/core";

@Component({
  selector: "app-check-badge",
  standalone: true,
  template: `
    <div [class]="containerClasses()" [style.background-color]="color()">
      <span
        class="material-symbols-outlined font-bold"
        [class.text-sm]="size() === 'md'"
        [class.text-[12px]]="size() === 'sm'">
        check
      </span>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckBadgeComponent {
  className = input<string>("");
  color = input<string>("var(--color-system)");
  size = input<"sm" | "md">("sm");

  protected containerClasses = computed(() => {
    const sizeStyle = this.size() === "md" ? "w-8 h-8" : "w-5 h-5";
    const baseStyle =
      "flex items-center justify-center rounded-full text-white shadow-lg border border-white/20";
    return `${this.className()} ${sizeStyle} ${baseStyle}`;
  });
}
