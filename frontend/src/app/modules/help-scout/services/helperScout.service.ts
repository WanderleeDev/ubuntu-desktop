import { Inject, Injectable, Renderer2 } from "@angular/core";
import { DOCUMENT } from "@angular/common";

@Injectable()
export class HelperScoutService {
  readonly #bodyElement: HTMLBodyElement;
  readonly #ACTIVE_CLASS = "mark";
  readonly #INTERACTIVE_SELECTOR = "[data-interactive]";

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private readonly renderer: Renderer2
  ) {
    this.#bodyElement = this.document.body as HTMLBodyElement;
  }

  public activateHelper(): void {
    const interactiveElements = Array.from(
      this.#bodyElement.querySelectorAll(this.#INTERACTIVE_SELECTOR)
    );

    const hasUncheckedElements = interactiveElements.some(element =>
      element.classList.contains(this.#ACTIVE_CLASS)
    );

    this.toggleClass(interactiveElements, hasUncheckedElements);
  }

  private toggleClass(elements: Element[], addClass: boolean): void {
    const action = addClass ? "removeClass" : "addClass";

    for (const element of elements) {
      this.renderer[action](element, this.#ACTIVE_CLASS);
    }
  }
}
