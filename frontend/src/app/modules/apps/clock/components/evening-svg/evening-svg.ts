import { ChangeDetectionStrategy, Component } from "@angular/core";
import { BaseIcon } from "../../interfaces/BaseIcon.class";

@Component({
  selector: "app-evening-svg",
  imports: [],
  templateUrl: "./evening-svg.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EveningSvg extends BaseIcon {}
