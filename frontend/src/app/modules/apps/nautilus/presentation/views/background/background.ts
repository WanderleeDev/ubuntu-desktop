import { NgOptimizedImage } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { SettingsStore } from "../../../infrastructure/settings.store";
import { NautilusButton } from "../../components/nautilus-button/nautilus-button";
import { CheckBadgeComponent } from "../../../../../../shared/components/check-badge/check-badge";

@Component({
  selector: "app-nautilus-background",
  imports: [NgOptimizedImage, NautilusButton, CheckBadgeComponent],
  templateUrl: "./background.html",
  styles: `
    :host {
      display: block;
      height: 100%;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Background {
  protected readonly settingsStore = inject(SettingsStore);
}
