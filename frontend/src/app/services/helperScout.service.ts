import { Inject, Injectable } from "@angular/core";
import { DOCUMENT } from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class HelperScoutService {
  #bodyElement: HTMLBodyElement; 

  constructor(@Inject(DOCUMENT) private document: Document) { 
    this.#bodyElement = this.document.getElementsByTagName('body')[0]; 
  }

  public activateHelper(): void {
    const interactiveElementList = this.#bodyElement.querySelectorAll('[data-interactive]')
    interactiveElementList.forEach(element => {
      element.classList.toggle('mark')
    })
  }
}