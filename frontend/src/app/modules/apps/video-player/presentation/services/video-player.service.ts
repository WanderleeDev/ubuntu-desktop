import { computed, Injectable, signal } from "@angular/core";
import { VideoMetadata } from "../../domain/video-player.model";

const DEFAULT_PLAYLIST: VideoMetadata[] = [
  {
    title: "Oceans",
    url: { mp4: "https://vjs.zencdn.net/v/oceans.mp4" },
    poster: "https://vjs.zencdn.net/v/poster.png",
  },
  {
    title: "Sintel Trailer",
    url: { mp4: "https://media.w3.org/2010/05/sintel/trailer.mp4" },
    poster: "https://media.w3.org/2010/05/sintel/poster.png",
  },
  {
    title: "Big Buck Bunny",
    url: { mp4: "https://www.w3schools.com/html/mov_bbb.mp4" },
    poster: "https://www.w3schools.com/html/pic_trulli.jpg",
  },
];

@Injectable()
export class VideoPlayerService {
  private videoElement?: HTMLVideoElement;

  #playlist = signal<VideoMetadata[]>(DEFAULT_PLAYLIST);
  #selectedVideoIndex = signal(0);

  playlist = computed(() => this.#playlist());
  selectedVideoIndex = computed(() => this.#selectedVideoIndex());

  title = computed(() => this.playlist()[this.selectedVideoIndex()].title);
  isPlaying = signal(false);
  currentTime = signal(0);
  duration = signal(0);
  volume = signal(1);
  isMuted = signal(false);
  playbackRate = signal(1);
  isBuffering = signal(false);
  showPlaylist = signal(true);

  currentVideo = computed(() => this.playlist()[this.selectedVideoIndex()]);

  progress = computed(() => {
    const dur = this.duration();
    return dur > 0 ? (this.currentTime() / dur) * 100 : 0;
  });

  formattedCurrentTime = computed(() => this.#formatTime(this.currentTime()));
  formattedDuration = computed(() => this.#formatTime(this.duration()));

  registerElement(el: HTMLVideoElement): void {
    this.videoElement = el;
  }

  #formatTime(time: number): string {
    if (isNaN(time) || time < 0) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  }

  togglePlay(): void {
    if (!this.videoElement) return;
    if (this.videoElement.paused) {
      this.videoElement.play();
      return;
    }
    this.videoElement.pause();
  }

  seek(time: number): void {
    if (this.videoElement) {
      this.videoElement.currentTime = time;
    }
  }

  setVolume(value: number): void {
    if (this.videoElement) {
      this.videoElement.volume = value;
    }
  }

  toggleMute(): void {
    if (this.videoElement) {
      this.videoElement.muted = !this.videoElement.muted;
    }
  }

  setPlaybackRate(rate: number): void {
    if (this.videoElement) {
      this.videoElement.playbackRate = rate;
    }
  }

  togglePlaylist(): void {
    this.showPlaylist.update(v => !v);
  }

  toggleFullscreen(): void {
    if (this.videoElement) {
      this.videoElement.requestFullscreen();
    }
  }

  selectVideo(index: number): void {
    this.#selectedVideoIndex.set(index);
    this.showPlaylist.set(false);

    setTimeout(() => {
      if (this.videoElement) {
        this.videoElement.play().catch(() => {
          this.isPlaying.set(false);
        });
      }
    });
  }

  next(): void {
    const nextIndex = (this.selectedVideoIndex() + 1) % this.playlist().length;
    this.selectVideo(nextIndex);
  }

  prev(): void {
    const prevIndex =
      (this.selectedVideoIndex() - 1 + this.playlist().length) %
      this.playlist().length;
    this.selectVideo(prevIndex);
  }
}
