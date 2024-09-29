import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { SidebarComponent } from '../../modules/sidebar/sidebar.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { DesktopComponent } from '../../modules/desktop/desktop.component';
import { NavbarDesktopComponent } from '../../modules/navbarDesktop/navbarDesktop.component';
import { HelpScoutComponent } from './components/helpScout/helpScout.component';

import { Store } from '@ngrx/store';
import { AppState } from '../../core/store/app.state';
import { APP_ICONS_SELECTORS } from '../../core/store/selectors/app-icons.selectors';
import { APP_ICONS_ACTIONS } from '../../core/store/actions/app-icons.actions';
import { PaintComponent } from '../../modules/paint/paint.component';
import { NautilusComponent } from '../../modules/nautilus/nautilus.component';
import { BannerDesktopComponent } from './components/banner-desktop/banner-desktop.component';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SidebarComponent,
    DragDropModule,
    DesktopComponent,
    NavbarDesktopComponent,
    HelpScoutComponent,
    PaintComponent,
    NautilusComponent,
    BannerDesktopComponent
  ],
  templateUrl: './home.component.html',
  styles: `:host { display: contents; }`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HomeComponent implements OnInit {
  readonly #store: Store<AppState> = inject(Store);
  readonly selectAppIcons$ = this.#store.select(APP_ICONS_SELECTORS.selectAllAppIcons)

  ngOnInit(): void {
    this.#store.dispatch(APP_ICONS_ACTIONS.loadAllApps())
  }
}
