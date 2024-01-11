import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
//  interface
import { IClockConfig } from '../../interfaces/IClockConfig.interface';

@Component({
  selector: 'app-simple-clock',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage
  ],
  templateUrl: './simpleClock.component.html',
  styles: [`
    :host {
      display: flex;
      gap: .5rem;
      align-items: center;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SimpleClockComponent {
  @Input({required: true}) clock?: Date;
  @Input() configClock:Partial<IClockConfig> = {
    hasIcons: false,
    hasDayAndMonth: false,
  };
  readonly clockIcon = '/src/assets/clock-icons/clock.svg'; 

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
