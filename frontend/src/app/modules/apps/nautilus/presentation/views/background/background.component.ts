import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { NautilusStore } from "../../../infrastructure/nautilus.store";
import { NgOptimizedImage } from "@angular/common";

@Component({
  selector: "app-nautilus-background",
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: "./background.component.html",
  styles: `
    :host {
      display: block;
      height: 100%;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BackgroundComponent {
  readonly store = inject(NautilusStore);
}
