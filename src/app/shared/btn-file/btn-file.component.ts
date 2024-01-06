import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ScreenshotService } from '../../services/screenshot.service';

@Component({
  selector: 'app-btn-file',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage
  ],
  templateUrl: './btn-file.component.html',
  styles: `:host { display: contents; }`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BtnFileComponent {
  @Input() file!: string;
  @Input({required: true}) size = 10;
  @Input() icon= 'assets/folder.svg';

  constructor(private screenshotSvc: ScreenshotService) { }

  public btnFileHandler () {
    this.screenshotSvc.takeScreenshot()
  }
}
