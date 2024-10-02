import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";

@Injectable({
  providedIn: "root",
})
export class VideoPlayerService {
  private videoPlayer$ = new BehaviorSubject<HTMLVideoElement | null>(null);

  public updateVideoPlayer(videoPlayer: HTMLVideoElement): void {
    this.videoPlayer$.next(videoPlayer);
    console.log("updated");
  }

  public getVideoPlayerObservable(): Observable<HTMLVideoElement | null> {
    return this.videoPlayer$.asObservable();
  }
}
// function Injectable(): (target: typeof VideoPlayerService) => void | typeof VideoPlayerService {
//   throw new Error('Function not implemented.');
// }
