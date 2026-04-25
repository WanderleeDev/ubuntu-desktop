import { CommonModule, NgOptimizedImage } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { NautilusStore } from "../../../infrastructure/nautilus.store";

@Component({
  selector: "app-nautilus-coming-soon",
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: "./coming-soon.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComingSoon {
  readonly #nautilusStore = inject(NautilusStore);
  readonly currentSection = this.#nautilusStore.currentSection;
}
