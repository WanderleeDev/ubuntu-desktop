import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { WindowWrapperComponent } from "../../layout/window-wrapper/window-wrapper.component";

@Component({
  selector: "app-curriculum-vitae",
  standalone: true,
  imports: [CommonModule, WindowWrapperComponent],
  templateUrl: "./curriculum-vitae.component.html",
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CurriculumVitaeComponent {}
