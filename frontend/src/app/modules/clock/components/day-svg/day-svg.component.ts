import { ChangeDetectionStrategy, Component } from "@angular/core";
import { BaseIcon } from "../../interfaces/BaseIcon.class";

@Component({
  selector: "app-day-svg",
  standalone: true,
  imports: [],
  templateUrl: "./day-svg.component.html",

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaySvgComponent extends BaseIcon {}
