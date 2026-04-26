import { ChangeDetectionStrategy, Component, InputSignal } from "@angular/core";
import { WindowWrapper } from "../../../../layout/window-wrapper/window-wrapper";
import { NgxVideoPlayer } from "./components/ngx-video-player/ngx-video-player";

export abstract class DesktopApp {
  protected abstract readonly AppId: InputSignal<string>;
}

@Component({
  selector: "app-video-player-app",
  imports: [WindowWrapper, NgxVideoPlayer],

  template: `
    <app-window-wrapper appTitle="Video Player">
      <app-ngx-video-player body />
    </app-window-wrapper>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class VideoPlayerApp {}
