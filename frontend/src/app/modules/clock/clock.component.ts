import { DatePipe } from "@angular/common";
import {
  ChangeDetectionStrategy,
  Component,
  input,
  Signal,
} from "@angular/core";
//  components
import {
  ClockSvgComponent,
  AfternoonSvgComponent,
  DaySvgComponent,
  EveningSvgComponent,
  SunriseSvgComponent,
} from "./components";
//  interface
import { IClockConfig } from "./interfaces/ClockConfig.interface";
//  pipe
import { ToNumberPipe } from "./pipes/toNumber.pipe";
//  services
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
        display: flex;
        gap: 0.5rem;
        align-items: center;
      }
    `,
  ],
  providers: [ClockService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClockComponent {
  clock: Signal<Date>;
  configClock = input<Partial<IClockConfig>>({
    hasIcons: false,
    hasDayAndMonth: false,
    hasVariableIcons: false,
  });

  constructor(private readonly clockSvc: ClockService) {
    this.clock = this.clockSvc.getSignalClock();
  }
}
