import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { ToolbarContainerComponent } from "../../containers/toolbar-container.component";
import { IBtnBasic } from "../../../../interfaces/IBtnData.interface";
import { BtnFileComponent } from "../../../../shared/components/btn-file/btn-file.component";

@Component({
    selector: "app-extra-toolbar",
    standalone: true,
    templateUrl: "./extra-toolbar.component.html",
    styles: `
    :host {
      display: block;
    }
  `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CommonModule, ToolbarContainerComponent, BtnFileComponent]
})
export class ExtraToolbarComponent {
  extraTools: IBtnBasic[] = [
    {
      label: "load",
      urlSvg: "assets/paint-icons/load.svg",
    },
    {
      label: "save",
      urlSvg: "assets/paint-icons/save.svg",
    },
    {
      label: "download",
      urlSvg: "assets/paint-icons/download.svg",
    },
  ];
}
