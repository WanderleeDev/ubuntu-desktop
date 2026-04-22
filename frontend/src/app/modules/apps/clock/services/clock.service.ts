import { isPlatformServer } from "@angular/common";
import {
  Injectable,
  OnDestroy,
  Signal,
  computed,
  signal,
  inject,
  PLATFORM_ID,
} from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ClockService implements OnDestroy {
  #signalClock = signal(new Date());
  #signalClockStream = computed(() => this.#signalClock());
  #timer?: NodeJS.Timeout;
  private readonly platformID = inject(PLATFORM_ID);

  constructor() {
    this.initClock();
  }

  private initClock(): void {
    if (isPlatformServer(this.platformID)) return;

    this.#timer = setInterval(() => {
      this.#signalClock.set(new Date());
    }, 1000);
  }

  public getSignalClock(): Signal<Date> {
    return this.#signalClockStream;
  }

  ngOnDestroy(): void {
    clearInterval(this.#timer);
  }
}
