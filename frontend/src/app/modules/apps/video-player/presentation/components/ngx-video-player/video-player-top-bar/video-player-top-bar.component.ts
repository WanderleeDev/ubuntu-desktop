import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from "@angular/core";

@Component({
  selector: "app-video-player-top-bar",
  imports: [],
  templateUrl: "./video-player-top-bar.component.html",
  styles: `
    :host {
      display: contents;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VideoPlayerTopBarComponent {
  title = input.required<string>();
  togglePlaylist = output<void>();
}
