import { ChangeDetectionStrategy, Component } from "@angular/core";
import { BaseIcon } from "../../interfaces/BaseIcon.class";

@Component({
    selector: "app-clock-svg",
    imports: [],
    templateUrl: "./clock-svg.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClockSvgComponent extends BaseIcon {}
