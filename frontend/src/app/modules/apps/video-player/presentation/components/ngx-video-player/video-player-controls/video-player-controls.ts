import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { VideoPlayerService } from "../../../services/video-player.service";

@Component({
  selector: "app-video-player-controls",
  standalone: true,
  imports: [],
  templateUrl: "./video-player-controls.html",
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
export class VideoPlayerControls {
  readonly service = inject(VideoPlayerService);

  changeSpeed(): void {
    const rates = [1, 1.5, 2, 0.5];
    const nextRate =
      rates[(rates.indexOf(this.service.playbackRate()) + 1) % rates.length];
    this.service.setPlaybackRate(nextRate);
  }

  seek(event: Event): void {
    const target = event.target as HTMLInputElement;
    if (target) this.service.seek(Number(target.value));
  }

  setVolume(event: Event): void {
    const target = event.target as HTMLInputElement;
    if (target) this.service.setVolume(Number(target.value));
  }
}
