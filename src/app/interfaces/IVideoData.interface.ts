export interface IVideoData {
  title: string,
  url: Partial<IVideoUrl>
}

export interface IVideoUrl {
  webm: string;
  mp4: string;
  ogg: string;
} 