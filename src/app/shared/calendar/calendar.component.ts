import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
//  Angular material
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import {MatNativeDateModule} from '@angular/material/core';
import {MatDividerModule} from '@angular/material/divider';
import { SimpleClockComponent } from '../simpleClock/simpleClock.component';



@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [
    CommonModule,
    MatDatepickerModule, 
    MatCardModule, 
    MatNativeDateModule,
    MatDividerModule,
    SimpleClockComponent
  ],
  templateUrl: './calendar.component.html',
  styles: [`:host { display: contents;}`],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarComponent {
  @Input({required: true}) date?: Date;
  selected!: Date | null;
  readonly actuallyDate = Date.now();

  readonly Icons = [
    {
      name: 'day',
      image: 'assets/clock-icons/day.svg'
    },
    {
      name: 'aftermoon',
      image: 'assets/clock-icons/aftermoon.svg'
    },
    {
      name: 'evening',
      image: 'assets/clock-icons/evening.svg'
    },
    {
      name: 'sunrise',
      image: 'assets/clock-icons/sunrise.svg'
    }
  ];
}
