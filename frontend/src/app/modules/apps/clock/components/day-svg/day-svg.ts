import { ChangeDetectionStrategy, Component } from "@angular/core";
import { BaseIcon } from "../../interfaces/BaseIcon.class";

@Component({
  selector: "app-day-svg",
  imports: [],
  templateUrl: "./day-svg.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaySvg extends BaseIcon {}
