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
    hasVariableIcons: false,
  };
  readonly clockIcon = '/src/assets/clock-icons/clock.svg'; 

  readonly listIcons = {
    'day': 'assets/clock-icons/day.svg',
    'aftermoon': 'assets/clock-icons/aftermoon.svg',
    'evening': 'assets/clock-icons/evening.svg',
    'sunrise': 'assets/clock-icons/sunrise.svg'
  };
}
