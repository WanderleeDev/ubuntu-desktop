import { NgOptimizedImage } from "@angular/common";
import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-banner-desktop",
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: "./banner-desktop.component.html",
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BannerDesktopComponent {
  bannerImage =
    "https://res.cloudinary.com/dy8gpozi6/image/upload/v1727476270/fossa_bcankr.webp";
}
