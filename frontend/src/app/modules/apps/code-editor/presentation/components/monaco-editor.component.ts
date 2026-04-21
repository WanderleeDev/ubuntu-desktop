import { isPlatformBrowser } from "@angular/common";
import { Component, computed, inject, PLATFORM_ID } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MonacoEditorModule } from "ngx-monaco-editor-v2";
import { CodeEditorStore } from "../../infrastructure/code-editor.store";

@Component({
  selector: "app-monaco-editor",
  imports: [FormsModule, MonacoEditorModule],
  template: `
    @if (isBrowser) {
      <ngx-monaco-editor
        class="editor-container"
        [options]="editorOptions()"
        [ngModel]="store.currentCode()"
        (ngModelChange)="store.updateCode($event)"></ngx-monaco-editor>
    } @else {
      <div
        class="w-full h-full bg-[#1e1e1e] flex items-center justify-center text-white/20">
        Loading Editor...
      </div>
    }
  `,
  styles: `
    :host {
      display: block;
      width: 100%;
      height: 100%;
    }
    .editor-container {
      height: 100%;
      width: 100%;
    }
  `,
})
export class MonacoEditorComponent {
  readonly store = inject(CodeEditorStore);
  readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  editorOptions = computed(() => ({
    theme: this.store.settings().theme,
    language: this.store.activeFile(),
    fontSize: this.store.settings().fontSize,
    fontFamily:
      "'Fira Code', 'Cascadia Code', Consolas, 'Courier New', monospace",
    fontLigatures: true,
    minimap: { enabled: this.store.settings().minimap },
    automaticLayout: true,
    scrollBeyondLastLine: false,
    lineNumbers: "on",
    roundedSelection: false,
    cursorStyle: "line",
    cursorBlinking: "smooth",
    renderWhitespace: "none",
    padding: { top: 10 },
  }));
}
