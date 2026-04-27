import { NgComponentOutlet } from "@angular/common";
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Injector,
  Type,
} from "@angular/core";

import Calculator from "../../apps/calculator/presentation/calculator";
import CodeEditorApp from "../../apps/code-editor/presentation/code-editor";
import { SettingsStore } from "../../apps/nautilus/infrastructure/settings.store";
import Nautilus from "../../apps/nautilus/presentation/nautilus";
import Paint from "../../apps/paint/presentation/paint";
import Todo from "../../apps/todo/presentation/todo";
import Translator from "../../apps/translator/presentation/translator";
import VideoPlayerApp from "../../apps/video-player/presentation/video-player";
import { APP_DESKTOP_ID } from "../infrastructure/app-desktop-id.token";
import { AppManagerStore } from "../infrastructure/app-manager.store";
import { AppItem } from "./components/app-item/app-item";
import { NavbarDesktop } from "./components/navbar-desktop/navbar-desktop";
import { Sidebar } from "./components/sidebar/sidebar";

@Component({
  selector: "app-desktop-view",
  imports: [Sidebar, NavbarDesktop, AppItem, NgComponentOutlet],
  providers: [AppManagerStore],
  templateUrl: "./desktop.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Desktop {
  protected readonly appsList = [
    {
      name: "Settings",
      icon: "assets/sidebarIcons/settings.svg",
      component: Nautilus,
    },
    {
      name: "Calculator",
      icon: "assets/desktopIcons/calculator.svg",
      component: Calculator,
    },
    {
      name: "Translate",
      icon: "assets/desktopIcons/translate.svg",
      component: Translator,
    },
    {
      name: "Paint",
      icon: "assets/desktopIcons/rnote.svg",
      component: Paint,
    },
    {
      name: "Video Player",
      icon: "assets/desktopIcons/video.svg",
      component: VideoPlayerApp,
    },
    {
      name: "VS Code",
      icon: "assets/sidebarIcons/vsc.svg",
      component: CodeEditorApp,
    },
    {
      name: "ToDo",
      icon: "assets/desktopIcons/bloc.svg",
      component: Todo,
    },
  ];
  protected readonly appManager = inject(AppManagerStore);
  protected readonly settingsStore = inject(SettingsStore);
  protected readonly apps = this.appManager.openedApps;
  protected readonly background = this.settingsStore.currentWallpaper;
  readonly #injector = inject(Injector);

  public openApp(name: string, comp: Type<unknown>): void {
    const appInjector = Injector.create({
      providers: [{ provide: APP_DESKTOP_ID, useValue: name }],
      parent: this.#injector,
    });

    this.appManager.add({
      id: name,
      injector: appInjector,
      comp,
    });
  }
}
