import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize',
  standalone: true,
})
export class CapitalizePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return ''
    
    return value.replace(value.charAt(0), value.charAt(0).toUpperCase())
  }
}
