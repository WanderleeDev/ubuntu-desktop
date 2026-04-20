import { computed } from "@angular/core";
import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from "@ngrx/signals";
import { VideoMetadata, VideoState } from "../domain/video-player.model";

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

const initialState: VideoState = {
  playlist: DEFAULT_PLAYLIST,
  selectedVideoIndex: 0,
  isPlaying: false,
  volume: 1,
  isMuted: false,
  currentTime: 0,
  duration: 0,
  isBuffering: false,
  isFullscreen: false,
};

export const VideoPlayerStore = signalStore(
  { providedIn: "root" },
  withState(initialState),
  withComputed(store => ({
    currentVideo: computed(() => store.playlist()[store.selectedVideoIndex()]),
  })),
  withMethods(store => ({
    setPlaylist(playlist: VideoMetadata[]) {
      patchState(store, { playlist, selectedVideoIndex: 0 });
    },
    selectVideo(index: number) {
      patchState(store, { selectedVideoIndex: index, isPlaying: true });
    },
    setPlaying(isPlaying: boolean) {
      patchState(store, { isPlaying });
    },
    setVolume(volume: number) {
      patchState(store, { volume, isMuted: volume === 0 });
    },
    setMuted(isMuted: boolean) {
      patchState(store, { isMuted });
    },
    updateTime(currentTime: number, duration: number) {
      patchState(store, { currentTime, duration });
    },
    setBuffering(isBuffering: boolean) {
      patchState(store, { isBuffering });
    },
    setFullscreen(isFullscreen: boolean) {
      patchState(store, { isFullscreen });
    },
    togglePlay() {
      patchState(store, { isPlaying: !store.isPlaying() });
    },
    toggleMute() {
      patchState(store, { isMuted: !store.isMuted() });
    },
    next() {
      const nextIndex =
        (store.selectedVideoIndex() + 1) % store.playlist().length;
      patchState(store, { selectedVideoIndex: nextIndex, isPlaying: true });
    },
    prev() {
      const prevIndex =
        (store.selectedVideoIndex() - 1 + store.playlist().length) %
        store.playlist().length;
      patchState(store, { selectedVideoIndex: prevIndex, isPlaying: true });
    },
  }))
);
