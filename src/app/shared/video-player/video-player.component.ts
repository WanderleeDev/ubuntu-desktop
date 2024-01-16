import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { WindowControlComponent } from '../windowControl/windowControl.component';
import { BtnBasicComponent } from '../btn-basic/btn-basic.component';
import { IBtnBasic } from '../../interfaces/IBtnData.interface';


@Component({
  selector: 'app-video-player',
  standalone: true,
  imports: [
    CommonModule,
    DragDropModule,
    WindowControlComponent,
    BtnBasicComponent
  ],
  templateUrl: './video-player.component.html',
  styleUrl: './video-player.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VideoPlayerComponent {
  iconsNavVideoPlayer: IBtnBasic[] = [
    {
      label: 'Play video',
      urlSvg: '/assets/extra-icons/play.svg'
    },
    {
      label: 'Pause video',
      urlSvg: '/assets/extra-icons/pause.svg'
    },
    {
      label: 'Full screen video',
      urlSvg: '/assets/extra-icons/fullScreen.svg'
    },
    {
      label: 'Min screen video',
      urlSvg: '/assets/extra-icons/minScreen.svg'
    }
  ]
  
  public playVideo(video : HTMLVideoElement) {
    video.paused ? video.play() : video.pause();
  }

  public resizeVideo(video : HTMLVideoElement) {
    video.requestFullscreen();
    console.log(
      video.controls
    );
    
  }
}
