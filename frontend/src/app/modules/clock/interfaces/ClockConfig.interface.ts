export interface ClockConfig {
  hasIcons: boolean;
  hasDayAndMonth: boolean;
  type: typeClock;
  hasVariableIcons: boolean;
}

type typeClock = "basic" | "regular" | "complete";
