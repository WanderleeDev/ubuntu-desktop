import { DatePipe, NgOutlet } from "@angular/common";
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  Signal,
  Type,
} from "@angular/core";
import {
  AfternoonSvg,
  ClockSvg,
  DaySvg,
  EveningSvg,
  SunriseSvg,
} from "./components";
import { ClockConfig } from "./interfaces/ClockConfig.interface";
import { ClockService } from "./services/clock.service";

@Component({
  selector: "app-clock",
  standalone: true,
  imports: [NgOutlet],
  templateUrl: "./clock.html",
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Clock {
  private readonly clockSvc = inject(ClockService);
  clock: Signal<Date> = this.clockSvc.getSignalClock();
  configClock = input<Partial<ClockConfig>>({});

  private readonly datePipe = new DatePipe("en-US");

  private readonly ICON_MAP: Record<string, Type<unknown>> = {
    day: DaySvg,
    afternoon: AfternoonSvg,
    evening: EveningSvg,
    sunrise: SunriseSvg,
    clock: ClockSvg,
  };

  protected readonly config = computed<ClockConfig>(() => ({
    hasIcons: false,
    hasDayAndMonth: false,
    hasVariableIcons: false,
    type: "regular",
    isSimple: true,
    ...this.configClock(),
  }));

  protected readonly hour = computed(() => this.clock().getHours());

  protected readonly iconType = computed(() => {
    const h = this.hour();
    if (h >= 7 && h < 14) return "day";
    if (h >= 14 && h < 18) return "afternoon";
    if (h >= 18 && h < 24) return "evening";
    if (h >= 0 && h < 7) return "sunrise";
    return "clock";
  });

  protected readonly activeIcon = computed(
    () => this.ICON_MAP[this.iconType()] || ClockSvg
  );
  protected readonly staticIcon = ClockSvg;

  // Pre-formatted strings to optimize template rendering
  protected readonly dateHeader = computed(() => {
    const format = this.config().isSimple ? "EEE, MMM d HH:mm" : "EEEE, d MMMM";
    return this.datePipe.transform(this.clock(), format) || "";
  });

  protected readonly timeBasic = computed(
    () => this.datePipe.transform(this.clock(), "HH:mm:ss") || ""
  );
  protected readonly timeRegular = computed(
    () => this.datePipe.transform(this.clock(), "HH:mm") || ""
  );
  protected readonly seconds = computed(
    () => this.datePipe.transform(this.clock(), "ss") || ""
  );
  protected readonly timeComplete = computed(
    () => this.datePipe.transform(this.clock(), "h:mm:ss a") || ""
  );
  protected readonly timeZoneFull = computed(
    () => this.datePipe.transform(this.clock(), "zzzz") || ""
  );
  protected readonly timeZoneShort = computed(
    () => this.datePipe.transform(this.clock(), "Z") || ""
  );
  protected readonly weekNumber = computed(
    () => this.datePipe.transform(this.clock(), "w") || ""
  );
  protected readonly isoDate = computed(
    () => this.datePipe.transform(this.clock(), "y-MM-dd") || ""
  );
}
