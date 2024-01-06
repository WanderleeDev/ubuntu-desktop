import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IBtnData } from '../../interfaces/IBtnData.interface';
import { BtnBasicComponent } from '../btn-basic/btn-basic.component';
import { ILogicController } from '../../interfaces/IWindowController';

@Component({
  selector: 'app-window-control',
  standalone: true,
  imports: [
    CommonModule,
    BtnBasicComponent
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
      urlSvg: 'assets/controls-icons/minimize.svg',
      label: 'minimize window'
    },
    {
      urlSvg: 'assets/controls-icons/maximize.svg',
      label: 'maximize window'
    },
    {
      urlSvg: 'assets/controls-icons/close.svg',
      label: 'close window'
    }
  ];
}
