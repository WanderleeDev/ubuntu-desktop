export interface VideoMetadata {
  title: string;
  url: {
    webm?: string;
    mp4?: string;
  };
  poster?: string;
}

export interface VideoState {
  playlist: VideoMetadata[];
  selectedVideoIndex: number;
  isPlaying: boolean;
  volume: number;
  isMuted: boolean;
  currentTime: number;
  duration: number;
  isBuffering: boolean;
  isFullscreen: boolean;
  playbackRate: number;
  showPlaylist: boolean;
}
