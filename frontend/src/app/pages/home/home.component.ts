import { ChangeDetectionStrategy, Component } from "@angular/core";

import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { DesktopComponent } from "./components/desktop/desktop.component";
import { NavbarDesktopComponent } from "./components/navbar-desktop/navbar-desktop.component";
import { ListAppComponent } from "./components/list-app/list-app.component";
import { AppItemComponent } from "./components/app-item/app-item.component";

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
  { id: "calculator", name: "Calculator", icon: "assets/desktopIcons/calculator.svg", app: "calculator" },
  { id: "translate", name: "Translate", icon: "assets/desktopIcons/translate.svg", app: "translator" },
  { id: "paint", name: "Paint", icon: "assets/desktopIcons/rnote.svg", app: "paint" },
  { id: "video", name: "Video Player", icon: "assets/desktopIcons/video.svg", app: "github" },
];

const fillMap = (x: any) => new Map();
type MiniApps = string;
type LazyComponent = any;

@Component({
  selector: "app-home",
  imports: [
    SidebarComponent,
    DesktopComponent,
    NavbarDesktopComponent,
    ListAppComponent,
    AppItemComponent,
  ],
  templateUrl: "./home.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export default class HomeComponent {
  protected readonly mainIcons = mainIconsSidebar;
  protected readonly secondaryIcons = secondaryIconsSidebar;
  protected readonly desktopIcons = desktopIcons;
  protected readonly APPS: Record<string, LazyComponent> = {
    github: () => import("../../modules/my-video/my-video.component"),
    translator: () => import("../../modules/translator/translator.component"),
    paint: () => import("../../modules/paint/paint.component"),
    calculator: () => import("../../modules/calculator/calculator.component"),
  };
  protected readonly appComponents: Map<MiniApps, LazyComponent>;

  constructor() {
    this.appComponents = fillMap(this.APPS);
  }
}

