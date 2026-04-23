import { ChangeDetectionStrategy, Component } from "@angular/core";
import { LoginForm } from "../../components/login form/login form";
import { User } from "../../../../../shared/components/user/user";

@Component({
  selector: "app-login",
  imports: [LoginForm, User],
  templateUrl: "./login.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Login {}
