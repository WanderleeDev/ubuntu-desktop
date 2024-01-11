import { CommonModule } from '@angular/common';
import { afterNextRender, ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';
//  Components
import { CalendarComponent } from '../../../../shared/calendar/calendar.component';
import { SimpleClockComponent } from '../../../../shared/simpleClock/simpleClock.component';
//  Material
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';

@Component({
  selector: 'app-navbar-clock',
  standalone: true,
  imports: [
    CommonModule,
    CalendarComponent,
    SimpleClockComponent,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  templateUrl: './navbarClock.component.html',
  styles: [`
    :host {
      display: block;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarClockComponent {
  clock = new Date();
  isViewCalendar = false;
  private cdRef = inject(ChangeDetectorRef)

  constructor() {
    afterNextRender(() => {
      this.updateClock()
    })
  }
  
  public updateClock () {
    setInterval(() => {
      this.clock = new Date();
      this.cdRef.detectChanges()
    }, 1000);
  }

  public showCalendar() {
    this.isViewCalendar = !this.isViewCalendar;
  }
}
