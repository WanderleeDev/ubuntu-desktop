import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { ToolbarContainerComponent } from "../toolbar-container.component";
import { BtnFileComponent } from "../../../../../../shared/components/btn-file/btn-file.component";
import { IPaintButton } from "../../../domain/paint.model";
import { PaintStore } from "../../../infrastructure/paint.store";

@Component({
  selector: "app-extra-toolbar",
  imports: [CommonModule, ToolbarContainerComponent, BtnFileComponent],
  templateUrl: "./extra-toolbar.component.html",
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExtraToolbarComponent {
  readonly store = inject(PaintStore);
  extraTools: IPaintButton[] = [
    {
      label: "load",
      urlSvg: "/assets/paint-icons/load.svg",
    },
    {
      label: "save",
      urlSvg: "/assets/paint-icons/save.svg",
    },
    {
      label: "download",
      urlSvg: "/assets/paint-icons/download.svg",
      onclick: () => this.store.download(),
    },
  ];
}
