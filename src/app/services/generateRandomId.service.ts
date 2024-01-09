import { Injectable } from '@angular/core';

interface IParamsGenerateID {
  length: number;
  includeLettersUpper: boolean;
  includeNumbers: boolean;
  includeSpecialChars: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class GenerateRandomId {
  private readonly MAX_LENGTH = 20;
  private readonly MIN_LENGTH = 2;
  private readonly lettersLower = 'abcdefghijklmnopqrstuvwxyz';
  private readonly lettersUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  private readonly numbers = '0123456789';
  private readonly specialChars = '!@#$%&*+-=?';

  public generateRandomId(
    params: IParamsGenerateID = {
      length: 10,
      includeLettersUpper: true,
      includeNumbers: true,
      includeSpecialChars: true
    }
  ): string {

    if (params.length < this.MIN_LENGTH || params.length > this.MAX_LENGTH ) {
      throw Error('Length must be between 2 and 20 characters');
    }

    let chars = this.lettersLower;

    if (params.includeLettersUpper) chars += this.lettersUpper;
    if (params.includeNumbers) chars += this.numbers;
    if (params.includeSpecialChars) chars += this.specialChars;

    let id = '';

    for (let i = 0; i < params.length; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
  }
}
