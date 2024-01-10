import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BtnBasicComponent } from '../../../../shared/btn-basic/btn-basic.component';
import { IBtnBasic } from '../../../../interfaces/IBtnData.interface';

@Component({
  selector: 'app-nav-desktop-control',
  standalone: true,
  imports: [
    CommonModule,
    BtnBasicComponent
  ],
  templateUrl: './navDesktopControl.component.html',
  styles: [`
    :host {
      display: block;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavDesktopControlComponent { 
  navDesktopIcons: IBtnBasic[] = [
    {
      label: 'open Network', 
      urlSvg: 'assets/navDesktop-icons/network-wired-offline-symbolic.svg'
    },
    {
      label: 'open Volume',
      urlSvg: 'assets/navDesktop-icons/audio-volume-high-symbolic.svg'
    },
    {
      label: 'open Mute',
      urlSvg: 'assets/navDesktop-icons/audio-volume-muted-symbolic.svg'
    }
  ];
}
