import { Directive, ElementRef, HostListener } from '@angular/core';
import { ScreenshotService } from '../services/screenshot.service';

@Directive({
  selector: '[appAutoScreen]',
  standalone: true,
})
export class AutoScreenDirective { 
  constructor(
    private elRef: ElementRef,
    private screenshotSvc: ScreenshotService,
  ) { }

  @HostListener('mouseenter', ['$event'])
  onMouseEnter(event: MouseEvent): void {
    this.screenshotSvc.takeScreenshot(event.target as HTMLElement)
  }
}
