import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-divider-x",
  standalone: true,
  imports: [],
  template: `<div class="divider"></div>`,
  styles: `
    .divider {
      height: 0.05rem;
      background-color: var(--accent-color-active);
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DividerXComponent {}
