import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BtnFileComponent } from '../../shared/btn-file/btn-file.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { MemoPadComponent } from '../../components/memoPad/memoPad.component';
import { DesktopComponent } from '../../components/desktop/desktop.component';
import { NavbarDesktopComponent } from '../../components/navbarDesktop/navbarDesktop.component';
import { HelpScoutComponent } from '../../shared/helpScout/helpScout.component';
import { VideoPlayerComponent } from '../../shared/video-player/video-player.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    BtnFileComponent,
    SidebarComponent,
    DragDropModule,
    MemoPadComponent,
    DesktopComponent,
    NavbarDesktopComponent,
    HelpScoutComponent,
    VideoPlayerComponent
  ],
  templateUrl: './home.component.html',
  styles: `:host { display: contents; }`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HomeComponent {
}
