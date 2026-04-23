import { NgOptimizedImage, NgStyle } from "@angular/common";
import { ChangeDetectionStrategy, Component, input } from "@angular/core";

@Component({
  selector: "app-user",
  imports: [NgOptimizedImage, NgStyle],
  templateUrl: "./user.component.html",
  styleUrl: "./user.component.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserComponent {
  userImage = input<string>("person");

  userName = input<string>("Unknown");
  size = input<number>(40);
}
