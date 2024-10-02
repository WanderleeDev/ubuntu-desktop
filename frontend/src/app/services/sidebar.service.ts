import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, combineLatest } from "rxjs";
import { IDataIcon, ISidebarIcons } from "../interfaces/IDataIcon.interface";
import { GenerateRandomId } from "./generateRandomId.service";

@Injectable({
  providedIn: "root",
})
export class SidebarService {
  private mainIcons$ = new BehaviorSubject<IDataIcon[]>([
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
  private secondaryIcons$ = new BehaviorSubject<IDataIcon[]>([
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

  public getObservableIcons$(): Observable<ISidebarIcons> {
    return combineLatest({
      mainIcons: this.mainIcons$.asObservable(),
      secondaryIcons: this.secondaryIcons$.asObservable(),
    });
  }
}
