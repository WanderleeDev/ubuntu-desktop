import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from "@angular/core";
import { HelperScoutService } from "./services/helperScout.service";

@Component({
  selector: "app-help-scout",
  standalone: true,
  imports: [],
  templateUrl: "./help-scout.component.html",
  styleUrl: "./help-scout.component.css",
  providers: [HelperScoutService],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HelpScoutComponent {
  constructor(private readonly helperScoutSvc: HelperScoutService) {}

  public activeHelper(): void {
    this.helperScoutSvc.activateHelper();
  }
}
