import { ChangeDetectionStrategy, Component } from "@angular/core";
import Clock from "../../../apps/clock/clock";
import { Loader } from "../../../../shared/components/loader/loader";
import { UbuntuLogo } from "../../../../shared/components/ubuntu-logo/ubuntu-logo";

@Component({
  selector: "app-auth-layout",
  imports: [UbuntuLogo, Loader, Clock],
  templateUrl: "./auth-layout.html",
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthLayout {}
