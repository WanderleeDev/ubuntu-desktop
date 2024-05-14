import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IDataIcon } from '../interfaces/IDataIcon.interface';
import { GenerateRandomId } from './generateRandomId.service';

@Injectable({
  providedIn: 'root'
})
export class DesktopIconsService {
  private desktopIcons$ = new BehaviorSubject<IDataIcon[]>([
    {
      id: this.randomIdSvc.generateRandomId(), 
      icon: 'assets/desktopIcons/video.svg', 
      name: 'github 2023' 
    },
    {
      id: this.randomIdSvc.generateRandomId(), 
      icon: 'assets/desktopIcons/bloc.svg', 
      name: 'bloc' 
    },
    {
      id: this.randomIdSvc.generateRandomId(), 
      icon: 'assets/desktopIcons/cv.svg', 
      name: 'cv' 
    },
    {
      id: this.randomIdSvc.generateRandomId(), 
      icon: 'assets/desktopIcons/desmume.svg', 
      name: 'desmune' 
    },
    {
      id: this.randomIdSvc.generateRandomId(), 
      icon: 'assets/desktopIcons/gta.svg', 
      name: 'GTA San Andreas' 
    },
    {
      id: this.randomIdSvc.generateRandomId(),
      icon: 'assets/desktopIcons/translate.svg',
      name: 'Translator'
    }
  ]);

  constructor(private randomIdSvc: GenerateRandomId) {}

  public getDesktopIcons(): Observable<IDataIcon[]> {
    return this.desktopIcons$.asObservable();
  }

  public setDesktopIcons(icon: IDataIcon): void {
    this.desktopIcons$.next(
      [...this.desktopIcons$.getValue(), icon]
    );
  }
}
