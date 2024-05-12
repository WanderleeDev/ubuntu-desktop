import { CommonModule } from "@angular/common";
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  computed,
  input,
  signal,
} from "@angular/core";
import languages from "../../language/languages";

@Component({
  selector: "app-selector",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./selector.component.html",
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectorComponent implements OnInit {
  initButtonValue = input.required<string>();
  buttonValue = signal<string>("");
  buttonComputed = computed(() => this.buttonValue.set(this.initButtonValue()));
  readonly languages = languages;
  isViewListLanguages = signal<boolean>(false);

  public listToggle() {
    this.isViewListLanguages.update((prev) => !prev);
  }

  public setLanguage(value: string) {
    this.buttonValue.set(value);
  }

  ngOnInit(): void {
    console.log(
      this.initButtonValue()
    );
  }
}
