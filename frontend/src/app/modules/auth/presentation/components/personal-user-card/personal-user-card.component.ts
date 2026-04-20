import { ChangeDetectionStrategy, Component, input } from "@angular/core";
import { UserComponent } from "../../../../../shared/components/user/user.component";

@Component({
  selector: "app-personal-user-card",
  imports: [UserComponent],
  templateUrl: "./personal-user-card.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonalUserCardComponent {
  username = input<string>("Unknown");
}
