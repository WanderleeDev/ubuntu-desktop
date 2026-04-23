import { ChangeDetectionStrategy, Component } from "@angular/core";
import { BaseIcon } from "../../interfaces/BaseIcon.class";

@Component({
  selector: "app-sunrise-svg",
  imports: [],
  templateUrl: "./sunrise-svg.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SunriseSvg extends BaseIcon {}
