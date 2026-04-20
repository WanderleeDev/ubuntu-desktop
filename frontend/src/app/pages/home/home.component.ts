import { ChangeDetectionStrategy, Component } from "@angular/core";

// import { NavbarDesktopComponent } from "./components/navbarDesktop/navbarDesktop.component";
// import { SidebarComponent } from "./components/sidebar/sidebar.component";
// import { DesktopComponent } from "./components/desktop/desktop.component";
const mainIconsSidebar: any[] = [];
const secondaryIconsSidebar: any[] = [];
const desktopIcons: any[] = [];
// import { ListAppComponent } from "./components/list-app/list-app.component";
// import { AppItemComponent } from "./components/app-item/app-item.component";
// import { fillMap } from "../../modules/nautilus/utils/fillMap";
const fillMap = (x: any) => new Map();
// import { MiniApps } from "../../shared/interfaces/MiniApps.enum";
// import { LazyComponent } from "../../shared/types/LazyComponent.type";
type MiniApps = string;
type LazyComponent = any;

@Component({
    selector: "app-home",
    imports: [
    // SidebarComponent,
    // NavbarDesktopComponent,
    // DesktopComponent,
    // ListAppComponent,
    // AppItemComponent,
    ],
    templateUrl: "./home.component.html",
    // styleUrls: ["./home.component.css"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export default class HomeComponent {
  protected readonly mainIcons = mainIconsSidebar;
  protected readonly secondaryIcons = secondaryIconsSidebar;
  protected readonly desktopIcons = desktopIcons;
  protected readonly APPS: Record<string, LazyComponent> = {
    github: () => import("../../modules/my-video/my-video.component"),
    // readme: () => import("../../modules/readme-editor/readme-editor.component"),
    translator: () => import("../../modules/translator/translator.component"),
    paint: () => import("../../modules/paint/paint.component"),
    calculator: () => import("../../modules/calculator/calculator.component"),
  };
  protected readonly appComponents: Map<MiniApps, LazyComponent>;

  constructor() {
    this.appComponents = fillMap(this.APPS);
  }
}
