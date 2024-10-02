import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { IDataIcon } from "../../../interfaces/IDataIcon.interface";
import { GenerateRandomId } from "../../../services/generateRandomId.service";

@Injectable({
  providedIn: "root",
})
export class AppsIconsService {
  private desktopIcons$ = new BehaviorSubject<IDataIcon[]>([
    {
      id: this.randomIdSvc.generateRandomId(),
      icon: "assets/desktopIcons/video.svg",
      name: "my github",
    },
    {
      id: this.randomIdSvc.generateRandomId(),
      icon: "assets/desktopIcons/bloc.svg",
      name: "bloc",
    },
    {
      id: this.randomIdSvc.generateRandomId(),
      icon: "assets/desktopIcons/cv.svg",
      name: "cv",
    },
    {
      id: this.randomIdSvc.generateRandomId(),
      icon: "assets/desktopIcons/desmume.svg",
      name: "desmune",
    },
    {
      id: this.randomIdSvc.generateRandomId(),
      icon: "assets/desktopIcons/gta.svg",
      name: "GTA San Andreas",
    },
    {
      id: this.randomIdSvc.generateRandomId(),
      icon: "assets/desktopIcons/translate.svg",
      name: "Translator",
    },
    {
      id: this.randomIdSvc.generateRandomId(),
      icon: "assets/desktopIcons/rnote.svg",
      name: "rnote",
    },
  ]);

  private sideBarMainIcons$ = new BehaviorSubject<IDataIcon[]>([
    {
      id: this.randomIdSvc.generateRandomId(),
      icon: "assets/sidebarIcons/folder.svg",
      name: "archivos",
    },
    {
      id: this.randomIdSvc.generateRandomId(),
      icon: "assets/sidebarIcons/edge.svg",
      name: "edge",
    },
    {
      id: this.randomIdSvc.generateRandomId(),
      icon: "assets/sidebarIcons/brave.svg",
      name: "brave",
    },
    {
      id: this.randomIdSvc.generateRandomId(),
      icon: "assets/sidebarIcons/firefox.svg",
      name: "firefox",
    },
    {
      id: this.randomIdSvc.generateRandomId(),
      icon: "assets/sidebarIcons/chrome.svg",
      name: "chrome",
    },
    {
      id: this.randomIdSvc.generateRandomId(),
      icon: "assets/sidebarIcons/vsc.svg",
      name: "visual code",
    },
    {
      id: this.randomIdSvc.generateRandomId(),
      icon: "assets/sidebarIcons/github.svg",
      name: "github",
    },
    {
      id: this.randomIdSvc.generateRandomId(),
      icon: "assets/sidebarIcons/discord.svg",
      name: "discord",
    },
  ]);
  private SideBarSecondaryIcons$ = new BehaviorSubject<IDataIcon[]>([
    {
      id: this.randomIdSvc.generateRandomId(),
      icon: "assets/sidebarIcons/hardDisk.webp",
      name: "disco duro",
    },
    {
      id: this.randomIdSvc.generateRandomId(),
      icon: "assets/sidebarIcons/trash.webp",
      name: "papelera",
    },
  ]);

  constructor(private randomIdSvc: GenerateRandomId) {}

  public getDesktopIcons(): Observable<IDataIcon[]> {
    return this.desktopIcons$.asObservable();
  }

  public getSideBarMainIcons(): Observable<IDataIcon[]> {
    return this.sideBarMainIcons$.asObservable();
  }
  public getSideBarSecondaryIcons(): Observable<IDataIcon[]> {
    return this.SideBarSecondaryIcons$.asObservable();
  }

  public setDesktopIcons(icon: IDataIcon): void {
    this.desktopIcons$.next([...this.desktopIcons$.getValue(), icon]);
  }
}
