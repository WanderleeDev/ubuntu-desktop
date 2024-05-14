import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
//  Components
import { BtnFileComponent } from '../../shared/ui/btn-file/btn-file.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DesktopIconsService } from '../../services/desktopIcons.service';
//  Interfaces
import { IDataIcon } from '../../interfaces/IDataIcon.interface';
import { VideoPlayerComponent } from '../../shared/ui/video-player/video-player.component';
import { IVideoData } from '../../interfaces/IVideoData.interface';

@Component({
  selector: 'app-desktop',
  standalone: true,
  imports: [
    CommonModule,
    BtnFileComponent,
    DragDropModule,
    BtnFileComponent,
    VideoPlayerComponent
  ],
  templateUrl: './desktop.component.html',
  styles: `
    :host {
      display: block;
      grid-column: 2/3;
      grid-row: 2/3;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DesktopComponent implements OnInit {
  desktopIcons$?: Observable<IDataIcon[]>;
  dataVideo: IVideoData = {
    title: 'My github',
    url: {
      mp4: 'https://www.dropbox.com/scl/fi/p1l4t1o0cob0z9hg3vhpg/unWrapper.mp4?rlkey=vv8l4bzlez4g9w2ypzbd5emce&raw=1',
      webm: 'https://www.dropbox.com/scl/fi/07oxt58obkp3uljmsub4u/unwrapped.webm?rlkey=92rqadbn6cclkwfq1oltnd9vk&raw=1',
    }
  }
  isViewPlayer = false;

  constructor(
    private desktopIconsSvc: DesktopIconsService
  ) {}

  ngOnInit(): void {
    this.desktopIcons$ = this.desktopIconsSvc.getDesktopIcons();
  }

  public fileHandler(): void {
    console.log('double click');
  }

  public viewPlayer(): void {
    this.isViewPlayer = !this.isViewPlayer;
  }
}
