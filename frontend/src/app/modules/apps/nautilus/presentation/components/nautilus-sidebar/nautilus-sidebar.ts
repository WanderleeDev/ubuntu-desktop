import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { NautilusStore } from "../../../infrastructure/nautilus.store";
import { NAUTILUS_SECTIONS } from "../../../infrastructure/data/sections";
import {
  NautilusSection,
  INautilusSection,
} from "../../../domain/nautilus.model";
import { NgClass } from "@angular/common";

@Component({
  selector: "app-nautilus-sidebar",
  imports: [NgClass],
  template: `
    <div
      class="w-64 bg-[#383838] border-r border-white/5 h-full flex flex-col overflow-y-auto custom-scrollbar">
      <div class="p-4">
        <div class="relative">
          <span
            class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-white/40 text-sm"
            >search</span
          >
          <input
            type="text"
            placeholder="Search"
            class="w-full bg-[#4a4a4a] text-xs py-1.5 pl-9 pr-3 rounded-md border border-white/5 focus:outline-none focus:border-orange-500/50 text-white/80 placeholder:text-white/30" />
        </div>
      </div>

      <div class="flex-1 space-y-6 pb-6">
        @for (cat of categories; track cat.id) {
          <div>
            <h3
              class="px-6 mb-2 text-[10px] font-bold uppercase tracking-wider text-white/30">
              {{ cat.label }}
            </h3>
            <div class="space-y-0.5">
              @for (
                section of getSectionsByCategory(cat.id);
                track section.id
              ) {
                <button
                  type="button"
                  (click)="selectSection(section.id)"
                  [ngClass]="{
                    'bg-orange-500/10 text-orange-500 font-medium':
                      store.currentSection() === section.id,
                    'text-white/70 hover:bg-white/5':
                      store.currentSection() !== section.id,
                  }"
                  class="w-full flex items-center gap-3 px-6 py-2 transition-colors text-sm relative group">
                  @if (store.currentSection() === section.id) {
                    <div
                      class="absolute left-0 w-1 h-6 bg-orange-500 rounded-r-full"></div>
                  }
                  <span class="material-symbols-outlined text-lg opacity-80">{{
                    section.icon
                  }}</span>
                  <span>{{ section.label }}</span>
                </button>
              }
            </div>
          </div>
        }
      </div>
    </div>
  `,
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
