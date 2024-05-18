import { AsyncPipe } from "@angular/common";
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
} from "@angular/core";
import { BtnFileComponent } from "../../shared/ui/btn-file/btn-file.component";
import {
  CdkDrag,
  CdkDragDrop,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem,
} from "@angular/cdk/drag-drop";
import { IDataIcon } from "../../interfaces/IDataIcon.interface";
import { Store } from "@ngrx/store";
import { AppState } from "../../core/store/app.state";
import { APP_ICONS_SELECTORS } from "../../core/store/selectors/app-icons.selectors";
import { cloneObservableArray } from "../../utils/cloneObservable";
import { sideBarIconsDto } from "../../core/store/types/store.types";
import { APP_ICONS_ACTIONS } from "../../core/store/actions/app-icons.actions";

@Component({
  selector: "app-sidebar",
  standalone: true,
  imports: [
    BtnFileComponent,
    CdkDropList,
    CdkDrag,
    CdkDropListGroup,
    AsyncPipe,
  ],
  templateUrl: "./sidebar.component.html",
  styles: `:host {
    display: block;
    grid-column: 1/2;
    grid-row: 2/3;
    z-index: 1;
  }`,
  changeDetection: ChangeDetectionStrategy.Default,
})
export class SidebarComponent {
  readonly #store: Store<AppState> = inject(Store);
  mainIcon$ = cloneObservableArray<IDataIcon>(
    this.#store.select(APP_ICONS_SELECTORS.selectSideBarMainIcons)
  );
  secondaryIcons$ = cloneObservableArray<IDataIcon>(
    this.#store.select(APP_ICONS_SELECTORS.selectSideBarSecondaryIcons)
  );

  public drop(event: CdkDragDrop<IDataIcon[]>) {
    console.log(event.previousContainer.data, event.container.data);

    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
    this.onItemDropped(event);
  }

  public onItemDropped(event: CdkDragDrop<IDataIcon[]>): void {
    console.log(event);
    
    if (event.previousContainer === event.container) {
      // Mismo contenedor, verifica si el índice cambió
      event.previousIndex !== event.currentIndex &&
        this.#store.dispatch(
          APP_ICONS_ACTIONS.loadSideBarApps({
            main: event.previousContainer.data,
            secondary: [],
          })
        );
    } else {
      this.#store.dispatch(
        APP_ICONS_ACTIONS.loadSideBarApps({
          main: event.previousContainer.data,
          secondary: event.container.data,
        })
      );
      // Contenedor diferente, verifica si el índice es el mismo
      // if (event.previousIndex === event.currentIndex) {
      //   console.log(
      //     "El elemento se movió a otra lista pero en el mismo índice."
      //   );
      // } else {
      //   console.log(
      //     "El elemento se movió a otra lista y a una nueva posición."
      //   );
      // }
    }
  }
}
