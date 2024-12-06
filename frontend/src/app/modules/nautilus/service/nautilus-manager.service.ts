import { computed, Injectable, Signal, signal } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { NautilusSections } from "../interfaces/Sections.emun";
import { generateSection } from "../utils/generateSection";
import { SidebarData } from "../interfaces/SectionData.interface";

@Injectable()
export class NautilusManagerService {
  #$currentRoute = signal<NautilusSections>(NautilusSections.BACKGROUND);
  #$CurrentRouteStream = computed(() => this.#$currentRoute());
  #sidebarData: SidebarData = this.generateNautilusData();

  public getCurrentRouteStream(): Signal<NautilusSections> {
    return this.#$CurrentRouteStream;
  }

  public getSidebarData(): SidebarData {
    return this.#sidebarData;
  }

  public setCurrentRoute(route: NautilusSections): Observable<never> | void {
    const isValidRoute = Object.values(NautilusSections).includes(route);

    if (!isValidRoute) {
      return throwError(() => new Error("Invalid route"));
    }

    this.#$currentRoute.set(route);
  }

  private generateNautilusData(): SidebarData {
    const formatSections = Object.values(NautilusSections);

    return {
      red: generateSection(formatSections.slice(0, 3)),
      appearance: generateSection(formatSections.slice(3, 8)),
      extra: [
        {
          name: "Applications" as NautilusSections,
          icon: "applications",
          subRoutes: generateSection(formatSections.slice(8, 11)),
        },
        {
          name: "Privacy" as NautilusSections,
          icon: "privacy",
          subRoutes: generateSection(formatSections.slice(11, 14)),
        },
        ...generateSection(formatSections.slice(14, 16)),
      ],
      system: generateSection(formatSections.slice(16, 19)),
    };
  }
}
