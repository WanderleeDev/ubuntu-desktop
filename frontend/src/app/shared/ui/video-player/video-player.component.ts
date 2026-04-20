import { KeyValuePipe } from "@angular/common";
import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
//  Interface
// import { IVideoData } from "../../interfaces/IVideoData.interface";

//  Video angular library
import { VgBufferingModule } from "@videogular/ngx-videogular/buffering";
import { VgControlsModule } from "@videogular/ngx-videogular/controls";
import { VgCoreModule } from "@videogular/ngx-videogular/core";
import { VgOverlayPlayModule } from "@videogular/ngx-videogular/overlay-play";

@Component({
  selector: "app-video-player",
  imports: [
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    KeyValuePipe,
  ],
  templateUrl: "./video-player.component.html",
  styleUrls: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VideoPlayerComponent {
  @Input({ required: true }) dataVideo?: any;
}
