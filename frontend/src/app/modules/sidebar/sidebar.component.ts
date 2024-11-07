import { AsyncPipe } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { BtnFileComponent } from "../../shared/components/btn-file/btn-file.component";
import {
  CdkDrag,
  CdkDragDrop,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem,
} from "@angular/cdk/drag-drop";
import { cloneObservableArray } from "../../utils/cloneObservable";
import { Store } from "@ngrx/store";
import { IDataIcon } from "../../interfaces/IDataIcon.interface";
import { AppState } from "../../store/app.state";
import { APP_ICONS_SELECTORS } from "../../store/selectors/app-icons.selectors";

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
  styles: `
    :host {
      display: block;
      grid-column: 1/2;
      grid-row: 2/3;
      z-index: 1;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
  readonly #store: Store<AppState> = inject(Store);
  mainIcon$ = cloneObservableArray<IDataIcon>(
    this.#store.select(APP_ICONS_SELECTORS.selectSideBarMainIcons)
  );
  secondaryIcons$ = cloneObservableArray<IDataIcon>(
    this.#store.select(APP_ICONS_SELECTORS.selectSideBarSecondaryIcons)
  );

  public drop(event: CdkDragDrop<IDataIcon[]>): void {
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
  }
}
