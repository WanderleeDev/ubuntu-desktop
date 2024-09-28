import { Injectable } from '@angular/core';
import html2canvas from 'html2canvas';

@Injectable({
  providedIn: 'root'
})
export class ScreenshotService {
  async takeScreenshot(targetElement?: HTMLElement): Promise<void> {
    const target = targetElement ?? document.body;
    
    const canvas = await html2canvas(target);
    document.body.appendChild(canvas);
  }
  
}
