import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, inject } from '@angular/core';
import { IBtnData } from '../../interfaces/IBtnData.interface';
import { BtnBasicComponent } from '../btn-basic/btn-basic.component';

import { AutoScreenDirective } from '../../directives/autoScreen.directive';
import { WindowControllerService } from '../../services/windowController.service';

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
  @Input({required: true}) windowReference!: HTMLElement;
  private controls = inject(WindowControllerService)

  iconControls: IBtnData[] = [
    {
      nameFn: this.controls.minimizeWindow.bind(this.controls),
      urlSvg: 'assets/controls-icons/minimize.svg',
      label: 'minimize window',
    },
    {
      nameFn: this.controls.maximizeWindow.bind(this.controls),
      urlSvg: 'assets/controls-icons/maximize.svg',
      label: 'maximize window',
    },
    {
      nameFn: this.controls.closeWindow.bind(this.controls),
      urlSvg: 'assets/controls-icons/close.svg',
      label: 'close window',
    }
  ];
}
