import { ChangeDetectionStrategy, Component } from "@angular/core";
import Clock from "../../modules/apps/clock/clock";
import { Loader } from "../../shared/components/loader/loader";
import { UbuntuLogo } from "../../shared/components/ubuntu-logo/ubuntu-logo";

@Component({
  selector: "app-auth-wrapper",
  imports: [UbuntuLogo, Loader, Clock],
  templateUrl: "./auth-wrapper.html",
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthWrapper {}
