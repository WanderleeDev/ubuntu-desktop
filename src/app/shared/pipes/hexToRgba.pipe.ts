import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'appHexToRgba',
  standalone: true,
})
export class HexToRgbaPipe implements PipeTransform {

  transform(color: string, alpha: number = 0.8): string {
    const hex = color.replace(/^#/, '');

    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }

}
