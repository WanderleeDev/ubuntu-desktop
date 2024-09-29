import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { BtnFileComponent } from "../../../../shared/components/btn-file/btn-file.component";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-register",
  standalone: true,
  imports: [CommonModule, BtnFileComponent, RouterLink],
  templateUrl: "./register.component.html",
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class RegisterComponent {
  readonly socialMedia = [
    "assets/extra-icons/github.svg",
    "assets/extra-icons/google.svg",
    "assets/extra-icons/facebook.svg",
    "assets/extra-icons/x.svg",
  ];
}
