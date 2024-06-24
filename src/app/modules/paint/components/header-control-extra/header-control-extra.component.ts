import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject, input } from "@angular/core";
import { PaintStore } from "../../local-store/paint.store";
import { BtnBasicComponent } from "../../../../shared/ui/btn-basic/btn-basic.component";

@Component({
  selector: "app-header-control-extra",
  standalone: true,
  imports: [CommonModule, BtnBasicComponent],
  templateUrl: "./header-control-extra.component.html",
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderControlExtraComponent {
  isActiveFullscreen = input.required<boolean>()
  #paintStore: PaintStore = inject(PaintStore);
  isFullscreen$ = this.#paintStore.hasFullScreenSelector$;

  public onClick(): void {
    this.#paintStore.toggleFullscreen();
  }
}
