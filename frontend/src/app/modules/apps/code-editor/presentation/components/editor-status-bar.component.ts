import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-editor-status-bar",
  standalone: true,
  template: `
    <div
      class="h-6 bg-[#e95420] flex items-center justify-between px-3 text-[10px] text-white font-medium">
      <div class="flex items-center gap-4">
        <div class="flex items-center gap-1">
          <span class="material-symbols-outlined text-[12px]">code</span>
          <span>Web Playground</span>
        </div>
      </div>
      <div class="flex items-center gap-4">
        <div class="flex items-center gap-1">
          <span class="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
          <span>Live Server: Running</span>
        </div>
        <span>Spaces: 2</span>
        <span>UTF-8</span>
      </div>
    </div>
  `,
  styles: `
    :host {
      display: block;
      width: 100%;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditorStatusBarComponent {}
