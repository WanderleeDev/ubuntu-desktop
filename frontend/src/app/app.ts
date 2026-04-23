import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { NgxSonnerToaster } from "ngx-sonner";
import { ubuntuCloneMetadata } from "./config";
import { SeoService } from "./shared/services/seo.service";

@Component({
  selector: "app-root",
  imports: [RouterOutlet, NgxSonnerToaster],
  template: `
    <ng-container>
      <h1 class="sr-only">Ubuntu Clone Local Fossa</h1>
      <ngx-sonner-toaster position="top-center" />
      <router-outlet />
    </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  readonly #seoService = inject(SeoService);

  constructor() {
    this.#seoService.applyIndexFollow();
    this.#seoService.updateMetaTags(ubuntuCloneMetadata);
  }
}
