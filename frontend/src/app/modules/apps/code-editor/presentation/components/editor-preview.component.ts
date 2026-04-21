import { Component, inject } from "@angular/core";
import { SafeHtmlPipe } from "../../../../../shared/pipes/safeHtml.pipe";
import { CodeEditorStore } from "../../infrastructure/code-editor.store";

@Component({
  selector: "app-editor-preview",
  standalone: true,
  imports: [SafeHtmlPipe],
  template: `
    <div class="w-full h-full bg-white relative flex flex-col overflow-hidden">
      <div
        (click)="store.togglePreview()"
        class="h-8 bg-[#252526] border-b border-white/5 flex items-center justify-between px-4 text-white/40 cursor-pointer hover:text-white transition-colors shrink-0">
        <div class="flex items-center gap-2">
          <span class="material-symbols-outlined text-[14px]">visibility</span>
          <span class="text-[10px] uppercase font-bold tracking-widest"
            >Live Preview</span
          >
        </div>
        <span class="material-symbols-outlined text-[14px]">close</span>
      </div>
      <iframe
        [srcdoc]="store.fullPreview() | safeHtml"
        class="flex-1 w-full border-none bg-white"
        sandbox="allow-scripts allow-same-origin">
      </iframe>
    </div>
  `,
})
export class EditorPreviewComponent {
  readonly store = inject(CodeEditorStore);
}
