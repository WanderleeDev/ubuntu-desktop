import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { NautilusStore } from "../../../infrastructure/nautilus.store";
import { NAUTILUS_SECTIONS } from "../../../infrastructure/data/sections";
import {
  NautilusSection,
  INautilusSection,
} from "../../../domain/nautilus.model";

@Component({
  selector: "app-nautilus-sidebar",
  templateUrl: "./nautilus-sidebar.html",
  styles: `
    :host {
      display: block;
      height: 100%;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NautilusSidebar {
  readonly store = inject(NautilusStore);
  readonly sections = NAUTILUS_SECTIONS;

  readonly categories = [
    { id: "connectivity", label: "Connectivity" },
    { id: "personalization", label: "Personalization" },
    { id: "system", label: "System" },
  ];

  getSectionsByCategory(category: string): INautilusSection[] {
    return this.sections.filter(
      (s: INautilusSection) => s.category === category
    );
  }

  selectSection(section: NautilusSection): void {
    this.store.setSection(section);
  }
}
