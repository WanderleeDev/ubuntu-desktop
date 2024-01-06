import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BtnFileComponent } from '../../shared/btn-file/btn-file.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    BtnFileComponent
  ],
  templateUrl: './sidebar.component.html',
  styles: `:host { display: contents; }`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
  sidebarIcons = [
    [
      'assets/folder.svg',
      'assets/sidebarIcons/edge.svg',
      'assets/sidebarIcons/brave.svg',
      'assets/sidebarIcons/firefox.svg',
      'assets/sidebarIcons/chrome.svg',
      'assets/sidebarIcons/vsc.svg',
      'assets/sidebarIcons/github.svg',
      'assets/sidebarIcons/discord.svg'
    ],
    [
      'assets/sidebarIcons/menuDots.svg'
    ]
  ]
}
