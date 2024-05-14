import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BtnFileComponent } from '../../shared/ui/btn-file/btn-file.component';
import { SidebarComponent } from '../../modules/sidebar/sidebar.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { MemoPadComponent } from '../../components/memoPad/memoPad.component';
import { DesktopComponent } from '../../modules/desktop/desktop.component';
import { NavbarDesktopComponent } from '../../modules/navbarDesktop/navbarDesktop.component';
import { HelpScoutComponent } from '../../shared/ui/helpScout/helpScout.component';
import { VideoPlayerComponent } from '../../shared/ui/video-player/video-player.component';
import { TerminalComponent } from '../../components/terminal/terminal.component';
import { TranslatorComponent } from '../../modules/translator/translator.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    BtnFileComponent,
    SidebarComponent,
    DragDropModule,
    MemoPadComponent,
    DesktopComponent,
    NavbarDesktopComponent,
    HelpScoutComponent,
    VideoPlayerComponent,
    TerminalComponent,
    TranslatorComponent
  ],
  templateUrl: './home.component.html',
  styles: `:host { display: contents; }`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HomeComponent {
}
