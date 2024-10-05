import { isPlatformServer } from "@angular/common";
import {
  Inject,
  Injectable,
  OnDestroy,
  Signal,
  computed,
  signal,
} from "@angular/core";
import { PLATFORM_ID } from "@angular/core";

@Injectable()
export class ClockService implements OnDestroy {
  #signalClock = signal(new Date());
  #signalClockStream = computed(() => this.#signalClock());
  #timer?: NodeJS.Timeout;

  constructor(@Inject(PLATFORM_ID) private platformID: object) {
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

  ngOnDestroy() {
    clearInterval(this.#timer);
  }
}
