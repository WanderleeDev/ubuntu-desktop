export interface IClockConfig {
  hasIcons: boolean;
  hasDayAndMonth: boolean;
  type: typeClock;
}

type typeClock = 'basic'| 'regular' | 'complete' ;