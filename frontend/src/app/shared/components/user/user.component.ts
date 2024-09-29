import { NgOptimizedImage, NgStyle } from "@angular/common";
import { ChangeDetectionStrategy, Component, input } from "@angular/core";

@Component({
  selector: "app-user",
  standalone: true,
  imports: [NgOptimizedImage, NgStyle],
  templateUrl: "./user.component.html",
  styleUrl: "./user.component.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserComponent {
  userImage = input<string>("/assets/extra-icons/user.svg");
  userName = input<string>("Unknown");
  size = input<number>(40);
}
