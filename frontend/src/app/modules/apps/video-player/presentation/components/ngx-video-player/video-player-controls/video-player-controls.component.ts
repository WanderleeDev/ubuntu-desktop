import { ChangeDetectionStrategy, Component, input, output } from "@angular/core";

@Component({
  selector: "app-video-player-controls",
  imports: [],
  templateUrl: "./video-player-controls.component.html",
  styles: `
    :host {
      display: contents;
    }
    input[type="range"] {
      accent-color: #e95420;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VideoPlayerControlsComponent {
  isPlaying = input.required<boolean>();
  currentTime = input.required<number>();
  duration = input.required<number>();
  playbackRate = input.required<number>();
  volume = input.required<number>();
  isMuted = input.required<boolean>();
  progress = input.required<number>();
  isPlaylistOpen = input.required<boolean>();

  togglePlay = output<void>();
  changeSpeed = output<void>();
  toggleMute = output<void>();
  toggleFullscreen = output<void>();
  togglePlaylist = output<void>();
  seek = output<any>();
  setVolume = output<any>();

  formatTime(time: number): string {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  }
}
