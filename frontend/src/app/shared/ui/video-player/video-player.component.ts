import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { DragDropModule } from "@angular/cdk/drag-drop";
//  Interface
import { IVideoData } from "../../interfaces/IVideoData.interface";

//  Video angular library
import { VgCoreModule } from "@videogular/ngx-videogular/core";
import { VgControlsModule } from "@videogular/ngx-videogular/controls";
import { VgOverlayPlayModule } from "@videogular/ngx-videogular/overlay-play";
import { VgBufferingModule } from "@videogular/ngx-videogular/buffering";

@Component({
  selector: "app-video-player",
  standalone: true,
  imports: [
    CommonModule,
    DragDropModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
  ],
  templateUrl: "./video-player.component.html",
  styleUrls: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VideoPlayerComponent {
  @Input({ required: true }) dataVideo?: IVideoData;
}
