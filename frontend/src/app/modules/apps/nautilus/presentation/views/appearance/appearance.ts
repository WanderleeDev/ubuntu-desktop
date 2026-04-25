import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { ThemeSelectService } from "ngx-theme-stack";
import { CheckBadgeComponent } from "../../../../../../shared/components/check-badge/check-badge";
import { NautilusStore } from "../../../infrastructure/nautilus.store";

@Component({
  selector: "app-nautilus-appearance",
  imports: [CheckBadgeComponent],
  templateUrl: "./appearance.html",
  styles: `
    :host {
      display: block;
      height: 100%;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Appearance {
  readonly store = inject(NautilusStore);
  readonly themeService = inject(ThemeSelectService);
  readonly isDarkTheme = this.themeService.isDark;
  readonly isLightTheme = this.themeService.isLight;

  readonly accentColors = [
    { name: "Orange", hex: "#e85725" },
    { name: "Yellow", hex: "#C7A62C" },
    { name: "Green", hex: "#6D7A37" },
    { name: "Lime", hex: "#6E8B0E" },
    { name: "Emerald", hex: "#10895A" },
    { name: "Teal", hex: "#20727B" },
    { name: "Blue", hex: "#125FB1" },
    { name: "Purple", hex: "#6E50BD" },
    { name: "Magenta", hex: "#9E3C8D" },
    { name: "Red", hex: "#CE2A4F" },
  ];
}
