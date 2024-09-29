import { ChangeDetectionStrategy, Component } from "@angular/core";
import { NavDesktopControlComponent } from "../../modules/navbarDesktop/components/navDesktopControl/navDesktopControl.component";
import { ClockService } from "../../services/clock.service";
import { LoaderComponent } from "../../shared/components/loader/loader.component";
import { UbuntuLogoComponent } from "../../shared/components/ubuntu-logo/ubuntu-logo.component";
import { SimpleClockComponent } from "../../shared/ui/simpleClock/simpleClock.component";

@Component({
  selector: "app-auth-wrapper",
  standalone: true,
  imports: [
    UbuntuLogoComponent,
    SimpleClockComponent,
    NavDesktopControlComponent,
    LoaderComponent,
  ],
  templateUrl: "./auth-wrapper.component.html",
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthWrapperComponent {
  clock = this.clockService.getSignalClock();

  constructor(private readonly clockService: ClockService) {}
}
