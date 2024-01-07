import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IBtnData, nameFn } from '../../interfaces/IBtnData.interface';
import { BtnBasicComponent } from '../btn-basic/btn-basic.component';
import { ILogicController } from '../../interfaces/IWindowController';
import { AutoScreenDirective } from '../../directives/autoScreen.directive';

@Component({
  selector: 'app-window-control',
  standalone: true,
  imports: [
    CommonModule,
    BtnBasicComponent,
    AutoScreenDirective
  ],
  templateUrl: './windowControl.component.html',
  styles: `:host {display: contents;}`,
  changeDetection: ChangeDetectionStrategy.Default,
})
export class WindowControlComponent {
  @Input({required: true}) logicControls?: ILogicController;
  @Input({required: true}) windowReference!: HTMLElement;

  iconControls: IBtnData[] = [
    {
      nameFn: nameFn.min,
      urlSvg: 'assets/controls-icons/minimize.svg',
      label: 'minimize window',
    },
    {
      nameFn: nameFn.max,
      urlSvg: 'assets/controls-icons/maximize.svg',
      label: 'maximize window',
    },
    {
      nameFn: nameFn.close,
      urlSvg: 'assets/controls-icons/close.svg',
      label: 'close window',
    }
  ];
}
