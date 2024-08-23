import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-divider-x",
  standalone: true,
  imports: [],
  template: `<div class="h-[.05rem] bg-[#464646]"></div>`,
  styles: `
    :host {
      display: contents;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DividerXComponent {}
