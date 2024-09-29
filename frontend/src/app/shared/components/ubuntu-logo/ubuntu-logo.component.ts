import { NgOptimizedImage } from "@angular/common";
import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-ubuntu-logo",
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: "./ubuntu-logo.component.html",
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UbuntuLogoComponent {}
