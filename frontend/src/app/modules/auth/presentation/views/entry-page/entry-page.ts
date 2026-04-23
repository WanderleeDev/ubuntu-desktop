import { ChangeDetectionStrategy, Component, signal } from "@angular/core";
import { RouterLink } from "@angular/router";
import { PersonalUserCard } from "../../components/personal-user-card/personal-user-card";
import { ScreenLock } from "../../components/screen-lock/screen-lock";

@Component({
  selector: "app-entry-page",
  imports: [RouterLink, PersonalUserCard, ScreenLock],
  templateUrl: "./entry-page.html",
  styles: `
    :host {
      display: block;
      width: 100%;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class EntryPage {
  isReadyToNavigate = signal<boolean>(false);

  public onClick(): void {
    this.isReadyToNavigate.set(true);
  }
}
