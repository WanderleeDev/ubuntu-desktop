import {
  CommonModule,
  NgOptimizedImage,
  isPlatformBrowser,
} from "@angular/common";
import {
  ChangeDetectionStrategy,
  Component,
  PLATFORM_ID,
  inject,
  signal,
} from "@angular/core";
import { RouterLink } from "@angular/router";
import { BtnGradient } from "../../shared/components/btn-gradient/btn-gradient";

@Component({
  selector: "app-not-found",
  imports: [CommonModule, NgOptimizedImage, RouterLink, BtnGradient],
  templateUrl: "./notFound.html",
  styles: `
    :host {
      display: contents;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class NotFound {
  private platformId = inject(PLATFORM_ID);
  readonly url = signal<string>("");

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      this.url.set(window.location.href);
    }
  }
}
