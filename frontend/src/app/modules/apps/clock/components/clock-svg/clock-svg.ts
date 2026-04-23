import { ChangeDetectionStrategy, Component } from "@angular/core";
import { BaseIcon } from "../../interfaces/BaseIcon.class";

@Component({
  selector: "app-clock-svg",
  imports: [],
  templateUrl: "./clock-svg.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClockSvg extends BaseIcon {}
