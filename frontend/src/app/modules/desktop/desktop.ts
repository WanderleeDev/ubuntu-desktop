import { AsyncPipe, NgComponentOutlet } from "@angular/common";
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  Type,
} from "@angular/core";
import { WindowManagerStore } from "./infrastructure/window-manager.store";

import { NautilusStore } from "../apps/nautilus/infrastructure/nautilus.store";
import { AppItem } from "./components/app-item/app-item";
import { NavbarDesktop } from "./components/navbar-desktop/navbar-desktop";
import { Sidebar } from "./components/sidebar/sidebar";
import { DesktopIcon } from "./interfaces/app-icon.interface";

const desktopIcons: DesktopIcon[] = [
  {
    id: "calculator",
    name: "Calculator",
    icon: "assets/desktopIcons/calculator.svg",
    app: "calculator",
  },
  {
    id: "translate",
    name: "Translate",
    icon: "assets/desktopIcons/translate.svg",
    app: "translator",
  },
  {
    id: "paint",
    name: "Paint",
    icon: "assets/desktopIcons/rnote.svg",
    app: "paint",
  },
  {
    id: "video",
    name: "Video Player",
    icon: "assets/desktopIcons/video.svg",
    app: "video-player",
  },
  {
    id: "vsc",
    name: "VS Code",
    icon: "assets/sidebarIcons/vsc.svg",
    app: "vsc",
  },
  {
    id: "todo",
    name: "ToDo",
    icon: "assets/desktopIcons/bloc.svg",
    app: "todo",
  },
  {
    id: "nautilus",
    name: "Settings",
    icon: "assets/sidebarIcons/settings.svg",
    app: "nautilus",
  },
];

@Component({
  selector: "app-desktop-view",
  standalone: true,
  imports: [Sidebar, NavbarDesktop, AppItem, NgComponentOutlet, AsyncPipe],
  providers: [WindowManagerStore],
  templateUrl: "./desktop.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Desktop {
  protected readonly windowManager = inject(WindowManagerStore);
  protected readonly nautilusStore = inject(NautilusStore);

  protected readonly desktopBackground = computed(() => {
    const current = this.nautilusStore.currentWallpaper();
    return current ? `url(${current})` : "black";
  });

  private _componentCache: Record<string, Promise<Type<unknown>>> = {};

  protected readonly desktopIcons = desktopIcons;

  protected readonly APPS: Record<
    string,
    () => Promise<{ default: Type<unknown> }>
  > = {
    "video-player": () =>
      import("../apps/video-player/presentation/video-player"),
    "vsc": () => import("../apps/code-editor/presentation/code-editor"),
    "translator": () => import("../apps/translator/presentation/translator"),
    "paint": () => import("../apps/paint/presentation/paint"),
    "calculator": () => import("../apps/calculator/presentation/calculator"),
    "nautilus": () => import("../apps/nautilus/presentation/nautilus"),
    "todo": () => import("../apps/todo/presentation/todo"),
    "clock": () => import("../apps/clock/clock"),
  };

  protected resolveApp(appKey: string): Promise<Type<unknown>> | null {
    if (!this.APPS[appKey]) return null;
    if (!this._componentCache[appKey]) {
      this._componentCache[appKey] = this.APPS[appKey]().then(m => m.default);
    }
    return this._componentCache[appKey];
  }
}
