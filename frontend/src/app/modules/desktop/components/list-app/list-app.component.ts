import { AsyncPipe } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { BtnFileComponent } from "../../../../shared/components/btn-file/btn-file.component";
import { Store } from "@ngrx/store";
import { AppState } from "../../../../core/store/app.state";
import { APP_ICONS_SELECTORS } from "../../../../core/store/selectors/app-icons.selectors";
import { CdkDrag } from "@angular/cdk/drag-drop";
import { IDataIcon } from "../../../../interfaces/IDataIcon.interface";
import { APPLICATION_ACTIONS } from "../../../../core/store/actions/application.actions";
import { TranslatorComponent } from "../../../translator/translator.component";
import { BlocComponent } from "../../../bloc/bloc.component";
import { GameComponent } from "../../../game/game.component";
import { EmulatorComponent } from "../../../emulator/emulator.component";
import { CurriculumVitaeComponent } from "../../../curriculum-vitae/curriculum-vitae.component";
import { PaintComponent } from "../../../paint/paint.component";
import { MyVideoComponent } from "../../../my-video/my-video.component";
import { CalculatorComponent } from "../../../calculator/calculator.component";
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
  imports: [
    BtnFileComponent,
    AsyncPipe,
    CdkDrag,
    TranslatorComponent,
    BlocComponent,
    GameComponent,
    EmulatorComponent,
    CurriculumVitaeComponent,
    PaintComponent,
    MyVideoComponent,
    CalculatorComponent,
    PortalComponentComponent,
  ],
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
