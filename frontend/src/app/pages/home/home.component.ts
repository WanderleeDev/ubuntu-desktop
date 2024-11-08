import { DragDropModule } from "@angular/cdk/drag-drop";
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
} from "@angular/core";

import { Store } from "@ngrx/store";
import { DesktopComponent } from "../../modules/desktop/desktop.component";
import { HelpScoutComponent } from "../../modules/help-scout/help-scout.component";
import { NautilusComponent } from "../../modules/nautilus/nautilus.component";
import { NavbarDesktopComponent } from "../../modules/navbarDesktop/navbarDesktop.component";
import { SidebarComponent } from "../../modules/sidebar/sidebar.component";
import { BannerDesktopComponent } from "../../shared/components/banner-desktop/banner-desktop.component";
import { APP_ICONS_ACTIONS } from "../../core/store/actions/app-icons.actions";
import { AppState } from "../../core/store/app.state";
import { APP_ICONS_SELECTORS } from "../../core/store/selectors/app-icons.selectors";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [
    SidebarComponent,
    DragDropModule,
    DesktopComponent,
    NavbarDesktopComponent,
    NautilusComponent,
    BannerDesktopComponent,
    HelpScoutComponent,
  ],
  templateUrl: "./home.component.html",
  styles: `
    :host {
      display: contents;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HomeComponent implements OnInit {
  readonly #store: Store<AppState> = inject(Store);
  readonly selectAppIcons$ = this.#store.select(
    APP_ICONS_SELECTORS.selectAllAppIcons
  );

  ngOnInit(): void {
    this.#store.dispatch(APP_ICONS_ACTIONS.loadAllApps());
  }
}
