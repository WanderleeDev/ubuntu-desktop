import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
} from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { SeoService } from "./services/seo.service";
import { SchemaMarkupService } from "./core/services/schema-markup.service";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet],
  template: ` <router-outlet /> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  readonly #schemaMarkupService = inject(SchemaMarkupService);
  readonly #seoService = inject(SeoService);
  // readonly #schemaMarkup = this.#schemaMarkupService.buildSchemaMarkupString({
  //   "@context": "http://schema.org",
  //   "@type": "SoftwareApplication",
  //   "name": "Ubuntu Focal Fossa Desktop Clone",
  //   "applicationCategory": "Operating System",
  //   "operatingSystem": "Linux",
  //   "softwareVersion": "20.04 LTS",
  //   "offers": {
  //     "@type": "Offer",
  //     "price": "0.00",
  //     "priceCurrency": "USD",
  //   },
  //   "publisher": {
  //     "@type": "Organization",
  //     "name": "Canonical Ltd.",
  //     "logo": {
  //       "@type": "ImageObject",
  //       "url": "URL del logo de Canonical",
  //     },
  //   },
  //   "screenshot": "URL de la captura de pantalla del clon de Ubuntu Focal Fossa",
  //   "releaseNotes": "URL a las notas de la versión del clon",
  //   "featureList":
  //     "El sistema operativo clonado incluye un escritorio similar al de Ubuntu Focal Fossa con aplicaciones básicas como un traductor y una lista de tareas (to-do list).",
  //   "downloadUrl": "URL de descarga del clon de Ubuntu Focal Fossa",
  //   "fileSize": "Tamaño del archivo de instalación del clon",
  //   "aggregateRating": {
  //     "@type": "AggregateRating",
  //     "ratingValue": "4.5",
  //     "reviewCount": "1234",
  //   },
  //   "review": [
  //     {
  //       "@type": "Review",
  //       "author": {
  //         "@type": "Person",
  //         "name": "Nombre del autor de la reseña",
  //       },
  //       "datePublished": "Fecha de publicación de la reseña",
  //       "description": "Descripción de la reseña",
  //       "reviewRating": {
  //         "@type": "Rating",
  //         "bestRating": "5",
  //         "worstRating": "1",
  //         "ratingValue": "4",
  //       },
  //     },
  //   ],
  // });

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

  // public getSchemaMarkup(): string {
  //   return this.#schemaMarkup;
  // }
}
