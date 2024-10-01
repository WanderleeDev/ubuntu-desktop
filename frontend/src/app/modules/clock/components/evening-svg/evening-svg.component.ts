import { ChangeDetectionStrategy, Component } from "@angular/core";
import { BaseIcon } from "../../interfaces/BaseIcon.class";

@Component({
  selector: "app-evening-svg",
  standalone: true,
  imports: [],
  templateUrl: "./evening-svg.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EveningSvgComponent extends BaseIcon {}
