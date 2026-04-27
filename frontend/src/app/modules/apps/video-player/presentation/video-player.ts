import { ChangeDetectionStrategy, Component, InputSignal } from "@angular/core";
import { AppWindow } from "../../../desktop/presentation/layouts/app-window";
import { NgxVideoPlayer } from "./components/ngx-video-player/ngx-video-player";

export abstract class DesktopApp {
  protected abstract readonly AppId: InputSignal<string>;
}

@Component({
  selector: "app-video-player-app",
  imports: [AppWindow, NgxVideoPlayer],

  template: `
    <app-window appTitle="Video Player">
      <app-ngx-video-player body />
    </app-window>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class VideoPlayerApp {}
