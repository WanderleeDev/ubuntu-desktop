import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { AppWindow } from "../../../desktop/presentation/layouts/app-window";
import { CodeEditorStore } from "../infrastructure/code-editor.store";
import { EditorPreview } from "./components/editor-preview";
import { EditorSidebar } from "./components/editor-sidebar";
import { EditorStatusBar } from "./components/editor-status-bar";
import { MonacoEditor } from "./components/monaco-editor";

@Component({
  selector: "app-code-editor-app",
  imports: [
    AppWindow,
    MonacoEditor,
    EditorSidebar,
    EditorPreview,
    EditorStatusBar,
  ],
  providers: [CodeEditorStore],
  templateUrl: "./code-editor.html",
  styles: `
    :host {
      display: block;
      width: 100%;
      height: 100%;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CodeEditorApp {
  readonly store = inject(CodeEditorStore);
}
