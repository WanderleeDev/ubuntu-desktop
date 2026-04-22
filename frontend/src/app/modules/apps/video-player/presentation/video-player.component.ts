import { ChangeDetectionStrategy, Component } from "@angular/core";
import { WindowWrapperComponent } from "../../../../layout/window-wrapper/window-wrapper.component";
import { NgxVideoPlayer } from "./components/ngx-video-player/ngx-video-player";

@Component({
  selector: "app-video-player-app",
  imports: [WindowWrapperComponent, NgxVideoPlayer],

  template: `
    <app-window-wrapper appTitle="Video Player">
      <app-ngx-video-player body />
    </app-window-wrapper>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class VideoPlayerApp {}
