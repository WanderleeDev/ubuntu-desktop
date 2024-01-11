import { Inject, Injectable } from "@angular/core";
import { DOCUMENT } from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class HelperScoutService {
  private bodyElement = this.document.getElementsByTagName('body')[0]; 
  constructor(@Inject(DOCUMENT) private document: Document) { }

  public activateHelper(): void {
    const interactiveElementList = this.bodyElement.querySelectorAll('[data-interactive]')
    console.log(interactiveElementList);
    interactiveElementList.forEach(element => {
      element.classList.toggle('mark')
    })
  }
}