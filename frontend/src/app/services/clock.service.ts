import { isPlatformServer } from "@angular/common";
import { Inject, Injectable, OnDestroy, computed, signal } from "@angular/core";
import { PLATFORM_ID } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ClockService implements OnDestroy {
  private signalClock = signal(new Date());
  private signalClockStream = computed(() => this.signalClock());
  private timer?: NodeJS.Timeout;

  constructor(@Inject(PLATFORM_ID) private platformID: Object) {
    this.initClock();
  }

  private initClock() {
    if (isPlatformServer(this.platformID)) return;

    this.timer = setInterval(() => {
      this.signalClock.set(new Date());
    }, 1000);
  }
  
  public getSignalClock() {
    return this.signalClockStream;
  }
  
  ngOnDestroy(): void {
    clearInterval(this?.timer);
  }
}
