import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, booleanAttribute } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip' 

@Component({
  selector: 'app-btn-file',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage,
    MatTooltipModule
  ],
  templateUrl: './btn-file.component.html',
  styles: `:host { display: block; }`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BtnFileComponent {
  @Input() nameFile?: string;
  @Input() label?: string;
  @Input({required: true}) size = 10;
  @Input({required: true}) icon= 'assets/folder.svg';
  @Input({transform: booleanAttribute}) priority = false;
}
