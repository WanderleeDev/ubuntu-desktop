import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PersonalUserCardComponent } from "../../components/personal-user-card/personal-user-card.component";
import { ScreenLockComponent } from "../../components/screen-lock/screen-lock.component";

@Component({
  selector: 'app-entry-page',
  standalone: true,
  imports: [
    RouterLink,
    PersonalUserCardComponent,
    ScreenLockComponent
],
  templateUrl: './entry-page.component.html',
  styles: `
    :host {
      display: block;
      width: 100%;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class EntryPageComponent { 
  isReadyToNavigate = signal<boolean>(false);

  public onClick(): void {
    this.isReadyToNavigate.set(true);
  }
}
