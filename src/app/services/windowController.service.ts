import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WindowControllerService {
  
  private applyStyles(target: HTMLElement): void {
    target.style.transformOrigin = 'center';
    target.style.transition = 'transform .1s linear, inset .5s linear';
  }
  
  public closeWindow(target: HTMLElement): void {
    this.applyStyles(target)
    console.log('s');
    
    target.style.display = 'none';
  }

  public maximizeWindow(target: HTMLElement): void {
    this.applyStyles(target)
    console.log('s');

    target.style.transform = 'scale(1)';
  }

  public minimizeWindow(target: HTMLElement): void {
    if (target) {
      this.applyStyles(target)
  
      target.classList.toggle('resize-window') 
      const parent = target.parentNode as HTMLElement;
      console.log(parent);
      
      setTimeout(() => {
        parent.remove();
      }, 100);
    }
  }
}
