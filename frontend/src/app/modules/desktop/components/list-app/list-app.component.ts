import { AsyncPipe } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { BtnFileComponent } from "../../../../shared/components/btn-file/btn-file.component";
import { Store } from "@ngrx/store";
import { AppState } from "../../../../core/store/app.state";
import { APP_ICONS_SELECTORS } from "../../../../core/store/selectors/app-icons.selectors";
import { CdkDrag } from "@angular/cdk/drag-drop";
import { IDataIcon } from "../../../../interfaces/IDataIcon.interface";
import { APPLICATION_ACTIONS } from "../../../../core/store/actions/application.actions";
import { PortalComponentComponent } from "../portal-component/portal-component.component";

enum components {
  "my github",
  "bloc",
  "cv",
  "desmune",
  "GTA San Andreas",
  "Translator",
  "rnote",
  "Calculator",
}

@Component({
  selector: "app-list-app",
  standalone: true,
  imports: [BtnFileComponent, AsyncPipe, CdkDrag, PortalComponentComponent],
  templateUrl: "./list-app.component.html",
  styles: `
    :host {
      display: contents;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListAppComponent {
  readonly components = components;
  readonly #store: Store<AppState> = inject(Store);
  readonly selectDesktopAppIcons$ = this.#store.select(
    APP_ICONS_SELECTORS.selectDesktopAppIcons
  );

  public onDoubleClick(app: IDataIcon): void {
    this.#store.dispatch(
      APPLICATION_ACTIONS.toggleApplication({
        name: app.name,
        action: "open",
      })
    );
  }
}
