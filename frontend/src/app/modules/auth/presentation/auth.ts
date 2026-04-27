import { ChangeDetectionStrategy, Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { AuthLayout } from "./layouts/auth-layout";

@Component({
  selector: "app-auth",
  imports: [AuthLayout, RouterOutlet],
  template: `
    <app-auth-layout>
      <router-outlet />
    </app-auth-layout>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Auth {}
