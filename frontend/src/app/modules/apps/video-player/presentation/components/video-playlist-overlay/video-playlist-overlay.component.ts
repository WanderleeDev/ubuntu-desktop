import { NgOptimizedImage } from "@angular/common";
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  output,
} from "@angular/core";
import { VideoPlayerStore } from "../../../infrastructure/video-player.store";

@Component({
  selector: "app-video-playlist-overlay",
  imports: [NgOptimizedImage],
  templateUrl: "./video-playlist-overlay.component.html",

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VideoPlaylistOverlayComponent {
  readonly store = inject(VideoPlayerStore);
  close = output<void>();
}
