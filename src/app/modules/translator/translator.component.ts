import { ChangeDetectionStrategy, Component } from '@angular/core';
import { WindowWrapperComponent } from '../../layout/window-wrapper/window-wrapper.component';
import { TranslatorControlsComponent } from './components/translator-controls/translator-controls.component';
import { TranslatorBoxInputComponent } from './components/translator-box-input/translator-box-input.component';

@Component({
  selector: 'app-translator',
  standalone: true,
  imports: [
    WindowWrapperComponent,
    TranslatorControlsComponent,
    TranslatorBoxInputComponent
  ],
  templateUrl: './translator.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TranslatorComponent { 
}
