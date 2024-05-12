import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-translator-box-input',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './translator-box-input.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TranslatorBoxInputComponent { }
