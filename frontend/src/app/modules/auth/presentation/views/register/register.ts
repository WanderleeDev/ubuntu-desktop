import { CommonModule, NgOptimizedImage } from "@angular/common";
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-register",
  imports: [CommonModule, RouterLink, NgOptimizedImage],
  templateUrl: "./register.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class RegisterComponent {
  readonly socialMedia = [
    "/assets/extra-icons/github.svg",
    "/assets/extra-icons/google.svg",
    "/assets/extra-icons/facebook.svg",
    "/assets/extra-icons/x.svg",
  ];
}
