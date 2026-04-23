import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import {
  CodeEditorStore,
  FileType,
} from "../../infrastructure/code-editor.store";

@Component({
  selector: "app-editor-sidebar",
  standalone: true,
  imports: [],
  template: `
    <div
      class="w-12 h-full bg-[#333333] border-r border-white/5 flex flex-col items-center py-4 gap-4">
      @for (file of files; track file.id) {
        <button
          type="button"
          (click)="store.setActiveFile(file.id)"
          [class.text-orange-500]="store.activeFile() === file.id"
          [class.text-white/40]="store.activeFile() !== file.id"
          class="group relative flex items-center justify-center w-full transition-all hover:text-white"
          [title]="file.label">
          @if (store.activeFile() === file.id) {
            <div class="absolute left-0 w-0.5 h-6 bg-orange-600"></div>
          }

          <span
            class="material-symbols-outlined text-[24px] transition-transform group-hover:scale-110"
            >{{ file.icon }}</span
          >

          <div
            class="absolute left-14 bg-[#252526] text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap shadow-xl border border-white/5 z-50 transition-opacity">
            {{ file.label }}
          </div>
        </button>
      }
      <div class="flex-1"></div>
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
export class EditorSidebar {
  readonly store = inject(CodeEditorStore);

  files: { id: FileType; label: string; icon: string; color: string }[] = [
    { id: "html", label: "index.html", icon: "html", color: "#E34F26" },
    { id: "css", label: "styles.css", icon: "css", color: "#264DE4" },
    {
      id: "javascript",
      label: "script.js",
      icon: "javascript",
      color: "#F7DF1E",
    },
  ];
}
