import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'appCapitalize',
  standalone: true,
})
export class CapitalizePipe implements PipeTransform {

  transform(value: string,): string {
    return value.slice(0,0);
  }

}
