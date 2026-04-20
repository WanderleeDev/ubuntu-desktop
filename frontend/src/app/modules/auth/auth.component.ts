import { ChangeDetectionStrategy, Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { AuthWrapperComponent } from "../../layout/auth-wrapper/auth-wrapper.component";

@Component({
  selector: "app-auth",
  imports: [AuthWrapperComponent, RouterOutlet],
  template: `
    <app-auth-wrapper>
      <router-outlet />
    </app-auth-wrapper>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthComponent {}
