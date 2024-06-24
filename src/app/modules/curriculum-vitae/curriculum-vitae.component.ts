import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-curriculum-vitae',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './curriculum-vitae.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CurriculumVitaeComponent { }
