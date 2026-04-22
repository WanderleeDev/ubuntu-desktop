import {
  afterNextRender,
  DestroyRef,
  Directive,
  ElementRef,
  inject,
} from "@angular/core";
import { VideoPlayerService } from "../services/video-player.service";

@Directive({
  selector: "video[appVideoController]",
  standalone: true,
})
export class VideoControllerDirective {
  private readonly service = inject(VideoPlayerService);
  private readonly el = inject(ElementRef<HTMLVideoElement>).nativeElement;
  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    afterNextRender(() => {
      this.service.registerElement(this.el);
      this.setupEventListeners();
    });
  }

  private setupEventListeners(): void {
    const onTimeUpdate = (): void => {
      this.service.currentTime.set(this.el.currentTime);
      this.service.duration.set(this.el.duration);
    };

    const onPlay = (): void => this.service.isPlaying.set(true);
    const onPause = (): void => this.service.isPlaying.set(false);
    const onVolumeChange = (): void => {
      this.service.volume.set(this.el.volume);
      this.service.isMuted.set(this.el.muted);
    };
    const onRateChange = (): void =>
      this.service.playbackRate.set(this.el.playbackRate);
    const onSeeking = (): void => this.service.isBuffering.set(true);
    const onSeeked = (): void => this.service.isBuffering.set(false);

    this.el.addEventListener("timeupdate", onTimeUpdate);
    this.el.addEventListener("play", onPlay);
    this.el.addEventListener("pause", onPause);
    this.el.addEventListener("volumechange", onVolumeChange);
    this.el.addEventListener("ratechange", onRateChange);
    this.el.addEventListener("seeking", onSeeking);
    this.el.addEventListener("seeked", onSeeked);

    this.destroyRef.onDestroy(() => {
      this.el.removeEventListener("timeupdate", onTimeUpdate);
      this.el.removeEventListener("play", onPlay);
      this.el.removeEventListener("pause", onPause);
      this.el.removeEventListener("volumechange", onVolumeChange);
      this.el.removeEventListener("ratechange", onRateChange);
      this.el.removeEventListener("seeking", onSeeking);
      this.el.removeEventListener("seeked", onSeeked);
    });
  }
}
