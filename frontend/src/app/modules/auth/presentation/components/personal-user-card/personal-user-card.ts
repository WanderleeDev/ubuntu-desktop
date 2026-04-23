import { ChangeDetectionStrategy, Component, input } from "@angular/core";
import { User } from "../../../../../shared/components/user/user";

@Component({
  selector: "app-personal-user-card",
  imports: [User],
  templateUrl: "./personal-user-card.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonalUserCard {
  username = input<string>("Unknown");
}
