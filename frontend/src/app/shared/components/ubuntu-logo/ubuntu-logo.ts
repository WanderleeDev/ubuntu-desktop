import { NgOptimizedImage } from "@angular/common";
import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-ubuntu-logo",
  imports: [NgOptimizedImage],
  templateUrl: "./ubuntu-logo.html",
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UbuntuLogo {}
