import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceCharacters',
  standalone: true,
})
export class ReplaceCharactersPipe implements PipeTransform {

  transform(value: string | null, characters: string[]): string {
    if (value === null || value.trim() === '') return ''
    if (!characters.length) throw new Error('The list of characters to be replaced is empty');
    
    let wordFormatting = value;

    for (const char of characters) {
      wordFormatting = wordFormatting.replaceAll(char, '');
    }

    return wordFormatting
  }

}
