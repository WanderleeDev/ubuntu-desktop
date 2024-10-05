import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
} from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { SeoService } from "./services/seo.service";
import { NgxSonnerToaster } from "ngx-sonner";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, NgxSonnerToaster],
  template: `
    <ng-container>
      <ngx-sonner-toaster position="top-center" />
      <router-outlet />
    </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  readonly #seoService = inject(SeoService);

  ngOnInit(): void {
    this.#seoService.title.setTitle("Desktop Ubuntu Clone");
    this.#seoService.meta.updateTag({
      name: "description",
      content:
        "Explora el clon de Ubuntu Focal Fossa con herramientas útiles como traductor y lista de tareas. Interfaz intuitiva y funcionalidad completa",
    });
    this.#seoService.setIndexFollow(true);
    this.#seoService.setCanonicalURL(
      "https://ubuntu-desktop-6pxuojjzx-wanderlee-maxs-projects.vercel.app/"
    );
  }
}
