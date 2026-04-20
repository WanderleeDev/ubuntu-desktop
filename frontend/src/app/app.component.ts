import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { SeoService } from "./shared/services/seo.service";
import { NgxSonnerToaster } from "ngx-sonner";
import { environment } from "../environments/environment.development";
import { ubuntuCloneMetadata } from "./config";

@Component({
  selector: "app-root",
  standalone: true,
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
export class AppComponent {
  readonly #seoService = inject(SeoService);

  constructor() {
    this.#seoService.applyIndexFollow();
    this.#seoService.setCanonicalURL(environment.CANONICAL_URL);
    this.#seoService.updateMetaTags(ubuntuCloneMetadata);
  }
}
