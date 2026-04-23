import { NgOptimizedImage } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { VideoPlayerService } from "../../services/video-player.service";

@Component({
  selector: "app-video-playlist-overlay",
  imports: [NgOptimizedImage],
  templateUrl: "./video-playlist-overlay.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VideoPlaylistOverlay {
  readonly service = inject(VideoPlayerService);
}
