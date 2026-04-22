import { AsyncPipe, NgComponentOutlet } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { WindowManagerStore } from "./infrastructure/window-manager.store";

import { AppItemComponent } from "./components/app-item/app-item.component";
import { NavbarDesktopComponent } from "./components/navbar-desktop/navbar-desktop.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";

const mainIconsSidebar: any[] = [
  { id: "firefox", icon: "assets/sidebarIcons/firefox.svg", app: "browser" },
  { id: "vsc", icon: "assets/sidebarIcons/vsc.svg", app: "vsc" },
  { id: "folder", icon: "assets/sidebarIcons/settings.svg", app: "nautilus" },
  { id: "github", icon: "assets/sidebarIcons/github.svg", app: "github" },
  { id: "trash", icon: "assets/sidebarIcons/trash.webp", app: "trash" },
];

const secondaryIconsSidebar: any[] = [
  { id: "menu", icon: "assets/sidebarIcons/menuDots.svg", app: "menu" },
];

const desktopIcons: any[] = [
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
  imports: [
    SidebarComponent,
    NavbarDesktopComponent,
    AppItemComponent,
    NgComponentOutlet,
    AsyncPipe,
  ],
  providers: [WindowManagerStore],
  templateUrl: "./desktop.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DesktopComponent {
  readonly windowManager = inject(WindowManagerStore);
  private _componentCache: Record<string, Promise<any>> = {};

  protected readonly mainIcons = mainIconsSidebar;
  protected readonly secondaryIcons = secondaryIconsSidebar;
  protected readonly desktopIcons = desktopIcons;

  protected readonly APPS: Record<string, any> = {
    "video-player": () =>
      import("../apps/video-player/presentation/video-player.component"),
    vsc: () => import("../apps/code-editor/presentation/code-editor.component"),
    translator: () =>
      import("../apps/translator/presentation/translator.component"),
    paint: () => import("../apps/paint/presentation/paint.component"),
    calculator: () =>
      import("../apps/calculator/presentation/calculator.component"),
    nautilus: () => import("../apps/nautilus/presentation/nautilus.component"),
    todo: () => import("../apps/todo/presentation/todo.component"),
    clock: () => import("../apps/clock/clock.component"),
  };

  protected resolveApp(appKey: string) {
    if (!this.APPS[appKey]) return null;
    if (!this._componentCache[appKey]) {
      this._componentCache[appKey] = this.APPS[appKey]().then(
        (m: any) => m.default
      );
    }
    return this._componentCache[appKey];
  }
}
