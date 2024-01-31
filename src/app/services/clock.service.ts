import { Injectable, OnDestroy, computed, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClockService implements OnDestroy {
  private signalClock = signal(new Date());
  private signalClockStream = computed(() => this.signalClock())
  private timerClock = () => {
    setInterval(() => this.signalClock.update(() => {
      console.log(new Date());
      return new Date()
    }), 1000);
  };

  public initClock() {
    this.timerClock()
  }

  public clearInterval() {
    this.clearInterval()
  }

  ngOnDestroy(): void {
    console.log('sd');
  }

  public getSignalClock() {
    return this.signalClockStream
  }
}
