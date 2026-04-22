import { Component, inject } from "@angular/core";
import { WindowWrapperComponent } from "../../../../layout/window-wrapper/window-wrapper.component";
import { CodeEditorStore } from "../infrastructure/code-editor.store";
import { EditorPreviewComponent } from "./components/editor-preview.component";
import { EditorSidebarComponent } from "./components/editor-sidebar.component";
import { EditorStatusBarComponent } from "./components/editor-status-bar.component";
import { MonacoEditorComponent } from "./components/monaco-editor.component";

@Component({
  selector: "app-code-editor-app",
  imports: [
    WindowWrapperComponent,
    MonacoEditorComponent,
    EditorSidebarComponent,
    EditorPreviewComponent,
    EditorStatusBarComponent,
  ],
  providers: [CodeEditorStore],
  templateUrl: "./code-editor.component.html",
  styles: `
    :host {
      display: block;
      width: 100%;
      height: 100%;
    }
  `,
})
export default class CodeEditorApp {
  readonly store = inject(CodeEditorStore);
}
