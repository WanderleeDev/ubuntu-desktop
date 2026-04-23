import { ChangeDetectionStrategy, Component } from "@angular/core";
import ClockComponent from "../../modules/apps/clock/clock.component";
import { LoaderComponent } from "../../shared/components/loader/loader.component";
import { UbuntuLogoComponent } from "../../shared/components/ubuntu-logo/ubuntu-logo.component";

@Component({
  selector: "app-auth-wrapper",
  imports: [UbuntuLogoComponent, LoaderComponent, ClockComponent],
  templateUrl: "./auth-wrapper.component.html",
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthWrapperComponent {}
