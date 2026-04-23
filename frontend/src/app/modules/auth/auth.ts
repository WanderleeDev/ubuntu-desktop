import { ChangeDetectionStrategy, Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { AuthWrapper } from "../../layout/auth-wrapper/auth-wrapper";

@Component({
  selector: "app-auth",
  imports: [AuthWrapper, RouterOutlet],
  template: `
    <app-auth-wrapper>
      <router-outlet />
    </app-auth-wrapper>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Auth {}
