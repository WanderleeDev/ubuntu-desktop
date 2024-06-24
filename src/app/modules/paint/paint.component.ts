import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { WindowWrapperComponent } from "../../layout/window-wrapper/window-wrapper.component";
import { CanvasComponent } from "./components/canvas/canvas.component";
import { ColoredToolbarComponent } from "./components/colored-toolbar/colored-toolbar.component";
import { ExtraToolbarComponent } from "./components/extra-toolbar/extra-toolbar.component";
import { PencilToolbarComponent } from "./components/pencil-toolbar/pencil-toolbar.component";
import { PaintStore } from "./local-store/paint.store";
import { AsyncPipe, NgClass } from "@angular/common";
import { HeaderControlExtraComponent } from "./components/header-control-extra/header-control-extra.component";
import { LetDirective } from '@ngrx/component';


@Component({
  selector: "app-paint",
  standalone: true,
  imports: [
    WindowWrapperComponent,
    CanvasComponent,
    ColoredToolbarComponent,
    ExtraToolbarComponent,
    PencilToolbarComponent,
    HeaderControlExtraComponent,
    AsyncPipe,
    NgClass,
    LetDirective
  ],
  templateUrl: "./paint.component.html",
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [PaintStore],
})
export class PaintComponent {
  #paintStore: PaintStore = inject(PaintStore);
  isViewColorBar$ = this.#paintStore.hasColorBarSelector$;
  isViewExtraBar$ = this.#paintStore.hasExtraBarSelector$;
  isFullscreen$ = this.#paintStore.hasFullScreenSelector$;
}
