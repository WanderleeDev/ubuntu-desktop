import { NgOptimizedImage, NgStyle } from "@angular/common";
import { ChangeDetectionStrategy, Component, input } from "@angular/core";

@Component({
  selector: "app-user",
  imports: [NgOptimizedImage, NgStyle],
  templateUrl: "./user.html",
  styleUrl: "./user.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class User {
  userImage = input<string>("person");

  userName = input<string>("Unknown");
  size = input<number>(40);
}
