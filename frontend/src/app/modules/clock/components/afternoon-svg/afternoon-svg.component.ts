import { ChangeDetectionStrategy, Component } from "@angular/core";
import { BaseIcon } from "../../interfaces/BaseIcon.class";

@Component({
  selector: "app-afternoon-svg",
  standalone: true,
  imports: [],
  templateUrl: "./afternoon-svg.component.html",
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AfternoonSvgComponent extends BaseIcon {}
