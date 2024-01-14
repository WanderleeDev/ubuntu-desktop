import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'toNumber',
  standalone: true,
})
export class ToNumberPipe implements PipeTransform {

  transform(value: string | null): number {
    return Number(value);
  }

}
