import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
} from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { SeoService } from "./services/seo.service";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet],
  template: ` <router-outlet /> `,
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
      "https://wanderlee-porfolio.vercel.app/home"
    );
  }
}
