import { Directive, input } from "@angular/core";

@Directive({})
export abstract class BaseIcon {
  size = input<number>(18);
}
