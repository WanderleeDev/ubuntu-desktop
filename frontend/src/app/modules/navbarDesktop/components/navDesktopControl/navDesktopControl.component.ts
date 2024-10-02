import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from "@angular/core";
//  Components
import { BtnBasicComponent } from "../../../../shared/components/btn-basic/btn-basic.component";
import { IBtnBasic } from "../../../../interfaces/IBtnData.interface";
import { SubConfigPanelComponent } from "../../../../shared/ui/subConfigPanel/subConfigPanel.component";

@Component({
  selector: "app-nav-desktop-control",
  standalone: true,
  imports: [CommonModule, BtnBasicComponent, SubConfigPanelComponent],
  templateUrl: "./navDesktopControl.component.html",
  styleUrls: ["./navDesktopControl.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavDesktopControlComponent {
  isOpenPanel = false;
  navDesktopIcons: IBtnBasic[] = [
    {
      label: "open Network",
      urlSvg: "assets/extra-icons/network-wired-offline-symbolic.svg",
    },
    {
      label: "open Volume",
      urlSvg: "assets/extra-icons/audio-volume-high-symbolic.svg",
    },
    {
      label: "open Mute",
      urlSvg: "assets/extra-icons/control.svg",
    },
  ];

  public showPanelControl(): void {
    this.isOpenPanel = !this.isOpenPanel;
  }
}
