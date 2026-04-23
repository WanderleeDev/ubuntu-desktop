import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { VideoPlayerService } from "../../../services/video-player.service";

@Component({
  selector: "app-video-player-top-bar",
  standalone: true,
  imports: [],
  templateUrl: "./video-player-top-bar.component.html",
  styles: `
    :host {
      display: contents;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VideoPlayerTopBar {
  readonly service = inject(VideoPlayerService);
}
