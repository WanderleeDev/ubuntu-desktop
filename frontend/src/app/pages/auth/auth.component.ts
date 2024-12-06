import { ChangeDetectionStrategy, Component } from "@angular/core";
import { AuthWrapperComponent } from "../../layout/auth-wrapper/auth-wrapper.component";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "app-auth",
  standalone: true,
  imports: [AuthWrapperComponent, RouterOutlet],
  template: `
    <app-auth-wrapper>
      <router-outlet />
    </app-auth-wrapper>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthComponent {}
