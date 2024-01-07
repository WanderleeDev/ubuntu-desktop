import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IDesktopIcon } from '../interfaces/IDesktopIcon.interface';

@Injectable({
  providedIn: 'root'
})
export class DesktopIconsService {
  private desktopIcons$ = new BehaviorSubject<IDesktopIcon[]>([
    {
      id: crypto.randomUUID(), 
      icon: 'assets/desktopIcons/video.svg', 
      name: 'unWrapper' 
    },
    {
      id: crypto.randomUUID(), 
      icon: 'assets/desktopIcons/bloc.svg', 
      name: 'bloc' 
    },
    {
      id: crypto.randomUUID(), 
      icon: 'assets/desktopIcons/cv.svg', 
      name: 'cv' 
    },
    {
      id: crypto.randomUUID(), 
      icon: 'assets/desktopIcons/desmume.svg', 
      name: 'desmune' 
    },
  ])

  public getDesktopIcons(): Observable<IDesktopIcon[]> {
    return this.desktopIcons$.asObservable();
  }

  public setDesktopIcons(icon: IDesktopIcon): void {
    this.desktopIcons$.next(
      [...this.desktopIcons$.getValue(), icon]
    );
  }
}
