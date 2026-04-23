import { ChangeDetectionStrategy, Component } from "@angular/core";
import { BaseIcon } from "../../interfaces/BaseIcon.class";

@Component({
  selector: "app-afternoon-svg",
  imports: [],
  templateUrl: "./afternoon-svg.html",
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AfternoonSvg extends BaseIcon {}
