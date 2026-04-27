import { NgComponentOutlet } from "@angular/common";
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Injector,
  Type,
} from "@angular/core";

import { SettingsStore } from "../../apps/nautilus/infrastructure/settings.store";
import { APP_DESKTOP_ID } from "../infrastructure/app-desktop-id.token";
import { AppManagerStore } from "../infrastructure/app-manager.store";
import { AppItem } from "./components/app-item/app-item";
import { NavbarDesktop } from "./components/navbar-desktop/navbar-desktop";
import { Sidebar } from "./components/sidebar/sidebar";

interface AppDesktop {
  name: string;
  icon: string;
  load: () => Promise<Type<unknown>>;
}

@Component({
  selector: "app-desktop-view",
  imports: [Sidebar, NavbarDesktop, AppItem, NgComponentOutlet],
  providers: [AppManagerStore],
  templateUrl: "./desktop.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Desktop {
  protected readonly appManager = inject(AppManagerStore);
  protected readonly settingsStore = inject(SettingsStore);
  protected readonly apps = this.appManager.openedApps;
  protected readonly background = this.settingsStore.currentWallpaper;
  readonly #injector = inject(Injector);
  protected readonly appsList: readonly AppDesktop[] = [
    {
      name: "Settings",
      icon: "assets/sidebarIcons/settings.svg",
      load: () =>
        import("../../apps/nautilus/presentation/nautilus").then(
          m => m.default
        ),
    },
    {
      name: "Calculator",
      icon: "assets/desktopIcons/calculator.svg",
      load: () =>
        import("../../apps/calculator/presentation/calculator").then(
          m => m.default
        ),
    },
    {
      name: "Translate",
      icon: "assets/desktopIcons/translate.svg",
      load: () =>
        import("../../apps/translator/presentation/translator").then(
          m => m.default
        ),
    },
    {
      name: "Paint",
      icon: "assets/desktopIcons/rnote.svg",
      load: () =>
        import("../../apps/paint/presentation/paint").then(m => m.default),
    },
    {
      name: "Video Player",
      icon: "assets/desktopIcons/video.svg",
      load: () =>
        import("../../apps/video-player/presentation/video-player").then(
          m => m.default
        ),
    },
    {
      name: "VS Code",
      icon: "assets/sidebarIcons/vsc.svg",
      load: () =>
        import("../../apps/code-editor/presentation/code-editor").then(
          m => m.default
        ),
    },
    {
      name: "ToDo",
      icon: "assets/desktopIcons/bloc.svg",
      load: () =>
        import("../../apps/todo/presentation/todo").then(m => m.default),
    },
  ];

  public async openApp(
    name: string,
    load: () => Promise<Type<unknown>>
  ): Promise<void> {
    const exists = this.appManager.openedApps().find(a => a.id === name);

    if (exists) {
      this.appManager.add(exists);
      return;
    }

    const comp = await load();

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
