import { ChangeDetectionStrategy, Component } from "@angular/core";
import { LoginFormComponent } from "../../components/login form/login form.component";
import { UserComponent } from "../../../../shared/components/user/user.component";

@Component({
  selector: "app-login",
  standalone: true,
  imports: [LoginFormComponent, UserComponent],
  templateUrl: "./login.component.html",
  styleUrl: "./login.component.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class LoginComponent {}
