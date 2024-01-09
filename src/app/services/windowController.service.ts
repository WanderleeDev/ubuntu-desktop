import { Injectable, inject } from '@angular/core';
import { ScreenshotService } from './screenshot.service';

@Injectable({
  providedIn: 'root'
})
export class WindowControllerService {
  screenshotSvc = inject(ScreenshotService);
  
  private applyStyles(target: HTMLElement): void {
    target.style.transformOrigin = 'top';
    target.style.transition = 'transform .1s linear, inset .5s linear, scale .1s linear';
  }

  private removeTarget(target: HTMLElement): void {
    setTimeout(() => { target.remove(); }, 300);
  }
  
  public closeWindow(target: HTMLElement): void {
    this.applyStyles(target);
    target.style.transform = 'scale(.5)';
    this.removeTarget(target);
  }

  public maximizeWindow(target: HTMLElement): void {
    this.applyStyles(target);
    target.classList.toggle('resize-window-max');
  }

  public minimizeWindow(target: HTMLElement) {
    this.applyStyles(target);
    target.classList.toggle('resize-window-min');
    // this.screenshotSvc.takeScreenshot(target)
  }
}
