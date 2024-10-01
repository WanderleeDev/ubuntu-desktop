import { ChangeDetectionStrategy, Component } from "@angular/core";
import { BaseIcon } from "../../interfaces/BaseIcon.class";

@Component({
  selector: "app-sunrise-svg",
  standalone: true,
  imports: [],
  templateUrl: "./sunrise-svg.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SunriseSvgComponent extends BaseIcon {}
