import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-divider-x",
  standalone: true,
  imports: [CommonModule],
  template: `<div class="h-[1px] bg-gray-300"></div>`,
  styles: `
    :host {
      display: contents;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DividerXComponent {}
