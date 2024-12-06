import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { WindowWrapperComponent } from "../../layout/window-wrapper/window-wrapper.component";
import { VideoPlayerComponent } from "../../shared/ui/video-player/video-player.component";

@Component({
  selector: "app-my-video",
  standalone: true,
  imports: [CommonModule, WindowWrapperComponent, VideoPlayerComponent],
  templateUrl: "./my-video.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class MyVideoComponent {
  readonly titleVideo = `My Github ${new Date().getFullYear()}`;
  readonly videoUrl =
    "https://www.dropbox.com/scl/fi/07oxt58obkp3uljmsub4u/unwrapped.webm?rlkey=92rqadbn6cclkwfq1oltnd9vk&st=52xxw4c7&raw=1";
}
