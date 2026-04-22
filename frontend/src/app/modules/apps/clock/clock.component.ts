import { DatePipe } from "@angular/common";
import {
  ChangeDetectionStrategy,
  Component,
  input,
  Signal,
  computed,
} from "@angular/core";
import {
  AfternoonSvgComponent,
  ClockSvgComponent,
  DaySvgComponent,
  EveningSvgComponent,
  SunriseSvgComponent,
} from "./components";
import { ClockConfig } from "./interfaces/ClockConfig.interface";
import { ToNumberPipe } from "./pipes/toNumber.pipe";
import { ClockService } from "./services/clock.service";

@Component({
  selector: "app-clock",
  standalone: true,
  imports: [
    ToNumberPipe,
    DatePipe,
    ClockSvgComponent,
    AfternoonSvgComponent,
    DaySvgComponent,
    EveningSvgComponent,
    SunriseSvgComponent,
  ],
  templateUrl: "./clock.component.html",
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ClockComponent {
  clock: Signal<Date>;
  configClock = input<Partial<ClockConfig>>({});

  protected readonly config = computed<ClockConfig>(() => ({
    hasIcons: false,
    hasDayAndMonth: false,
    hasVariableIcons: false,
    type: "regular",
    isSimple: true,
    ...this.configClock(),
  }));

  constructor(private readonly clockSvc: ClockService) {
    this.clock = this.clockSvc.getSignalClock();
  }
}
