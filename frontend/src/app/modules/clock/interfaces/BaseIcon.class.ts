import { Directive, input } from "@angular/core";

@Directive({
  standalone: true,
})
export abstract class BaseIcon {
  size = input<number>(18);
}
