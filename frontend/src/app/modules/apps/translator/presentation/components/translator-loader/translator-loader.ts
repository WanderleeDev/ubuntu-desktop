import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-translator-loader",
  imports: [],
  templateUrl: "./translator-loader.html",
  styles: `
    :host {
      display: flex;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TranslatorLoader {}
