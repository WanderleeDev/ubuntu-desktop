import { Injectable } from '@angular/core';
import html2canvas from 'html2canvas';

@Injectable({
  providedIn: 'root'
})
export class ScreenshotService {
  async takeScreenshot() {
    const target = document.body;
    const canvas = await html2canvas(target);
    document.body.appendChild(canvas);
  }
}
