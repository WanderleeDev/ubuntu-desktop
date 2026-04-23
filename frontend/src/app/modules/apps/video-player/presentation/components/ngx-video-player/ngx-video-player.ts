import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { VideoControllerDirective } from "../../directives/video-controller.directive";
import { VideoPlayerService } from "../../services/video-player.service";
import { VideoPlaylistOverlay } from "../video-playlist-overlay/video-playlist-overlay";
import { VideoPlayerControls } from "./video-player-controls/video-player-controls";
import { VideoPlayerTopBar } from "./video-player-top-bar/video-player-top-bar";

@Component({
  selector: "app-ngx-video-player",
  imports: [
    VideoPlaylistOverlay,
    VideoPlayerTopBar,
    VideoPlayerControls,
    VideoControllerDirective,
  ],

  providers: [VideoPlayerService],
  templateUrl: "./ngx-video-player.html",
  styles: `
    :host {
      display: block;
    }
    input[type="range"] {
      cursor: pointer;
      accent-color: #e95420;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxVideoPlayer {
  readonly service = inject(VideoPlayerService);
}
