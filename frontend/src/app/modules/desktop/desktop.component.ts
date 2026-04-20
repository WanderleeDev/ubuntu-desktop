import { ChangeDetectionStrategy, Component } from "@angular/core";

import MainVideoPlayerComponent from "../apps/video-player/presentation/video-player.component";
import { AppItemComponent } from "./components/app-item/app-item.component";
import { NavbarDesktopComponent } from "./components/navbar-desktop/navbar-desktop.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";

const mainIconsSidebar: any[] = [
  { id: "firefox", icon: "assets/sidebarIcons/firefox.svg", app: "browser" },
  { id: "vsc", icon: "assets/sidebarIcons/vsc.svg", app: "vsc" },
  { id: "folder", icon: "assets/sidebarIcons/folder.svg", app: "nautilus" },
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
    app: "github",
  },
];

const fillMap = (x: any) => new Map();
type MiniApps = string;
type LazyComponent = any;

@Component({
  selector: "app-desktop-view",
  imports: [
    SidebarComponent,
    NavbarDesktopComponent,
    AppItemComponent,
    MainVideoPlayerComponent,
  ],
  templateUrl: "./desktop.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DesktopComponent {
  protected readonly mainIcons = mainIconsSidebar;
  protected readonly secondaryIcons = secondaryIconsSidebar;
  protected readonly desktopIcons = desktopIcons;
  protected readonly APPS: Record<string, LazyComponent> = {
    github: () =>
      import("../apps/video-player/presentation/video-player.component"),
    translator: () =>
      import("../apps/translator/presentation/translator.component"),
    paint: () => import("../apps/paint/presentation/paint.component"),
    calculator: () =>
      import("../apps/calculator/presentation/calculator.component"),
    nautilus: () => import("../apps/nautilus/presentation/nautilus.component"),
  };
  protected readonly appComponents: Map<MiniApps, LazyComponent>;

  constructor() {
    this.appComponents = fillMap(this.APPS);
  }
}
