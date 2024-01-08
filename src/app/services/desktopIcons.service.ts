import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IDataIcon } from '../interfaces/IDataIcon.interface';

@Injectable({
  providedIn: 'root'
})
export class DesktopIconsService {
  private desktopIcons$ = new BehaviorSubject<IDataIcon[]>([
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
    {
      id: crypto.randomUUID(), 
      icon: 'assets/desktopIcons/gta.svg', 
      name: 'GTA San Andreas' 
    },
  ])

  public getDesktopIcons(): Observable<IDataIcon[]> {
    return this.desktopIcons$.asObservable();
  }

  public setDesktopIcons(icon: IDataIcon): void {
    this.desktopIcons$.next(
      [...this.desktopIcons$.getValue(), icon]
    );
  }
}
