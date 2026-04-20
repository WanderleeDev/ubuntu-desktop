import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  ElementRef,
  inject,
  signal,
  viewChild,
} from "@angular/core";
import { VideoPlayerStore } from "../../../infrastructure/video-player.store";
import { VideoPlaylistOverlayComponent } from "../video-playlist-overlay/video-playlist-overlay.component";
import { VideoPlayerControlsComponent } from "./video-player-controls/video-player-controls.component";
import { VideoPlayerTopBarComponent } from "./video-player-top-bar/video-player-top-bar.component";

@Component({
  selector: "app-ngx-video-player",
  imports: [
    VideoPlaylistOverlayComponent,
    VideoPlayerTopBarComponent,
    VideoPlayerControlsComponent,
  ],
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
  readonly store = inject(VideoPlayerStore);

  videoEl = viewChild<ElementRef<HTMLVideoElement>>("videoRef");

  isPlaying = signal(false);
  currentTime = signal(0);
  duration = signal(0);
  volume = signal(1);
  isMuted = signal(true);
  playbackRate = signal(1);
  showPlaylist = signal(false);

  progress = computed(() => {
    const dur = this.duration();
    return dur > 0 ? (this.currentTime() / dur) * 100 : 0;
  });

  constructor() {
    effect(() => {
      const el = this.videoEl()?.nativeElement;
      if (!el) return;

      const onTimeUpdate = () => this.currentTime.set(el.currentTime);
      const onDurationChange = () => this.duration.set(el.duration);
      const onPlay = () => this.isPlaying.set(true);
      const onPause = () => this.isPlaying.set(false);
      const onVolumeChange = () => {
        this.volume.set(el.volume);
        this.isMuted.set(el.muted);
      };
      const onRateChange = () => this.playbackRate.set(el.playbackRate);

      el.addEventListener("timeupdate", onTimeUpdate);
      el.addEventListener("durationchange", onDurationChange);
      el.addEventListener("play", onPlay);
      el.addEventListener("pause", onPause);
      el.addEventListener("volumechange", onVolumeChange);
      el.addEventListener("ratechange", onRateChange);
    });

    effect(() => {
      const video = this.store.currentVideo();
      const el = this.videoEl()?.nativeElement;
      if (video && el) {
        setTimeout(() => {
          if (this.store.isPlaying()) el.play();
        }, 0);
      }
    });
  }

  togglePlay() {
    const el = this.videoEl()?.nativeElement;
    if (el) el.paused ? el.play() : el.pause();
  }

  seek(event: any) {
    const el = this.videoEl()?.nativeElement;
    if (el) el.currentTime = event.target.value;
  }

  toggleMute() {
    const el = this.videoEl()?.nativeElement;
    if (el) el.muted = !el.muted;
  }

  setVolume(event: any) {
    const el = this.videoEl()?.nativeElement;
    if (el) el.volume = event.target.value;
  }

  toggleFullscreen() {
    const el = this.videoEl()?.nativeElement;
    if (el) el.requestFullscreen();
  }

  changeSpeed() {
    const el = this.videoEl()?.nativeElement;
    if (!el) return;
    const rates = [1, 1.5, 2, 0.5];
    const nextRate =
      rates[(rates.indexOf(this.playbackRate()) + 1) % rates.length];
    el.playbackRate = nextRate;
  }

  togglePlaylist() {
    this.showPlaylist.update(v => !v);
  }

  formatTime(time: number): string {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  }
}
