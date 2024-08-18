import { ChangeDetectionStrategy, Component} from '@angular/core';
import { ListAppComponent } from './components/list-app/list-app.component';


@Component({
  selector: 'app-desktop',
  standalone: true,
  imports: [
    ListAppComponent
  ],
  templateUrl: './desktop.component.html',
  styles: `
    :host {
      display: block;
      grid-column: 2/3;
      grid-row: 2/3;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DesktopComponent{
  // dataVideo: IVideoData = {
  //   title: 'My github',
  //   url: {
  //     mp4: 'https://www.dropbox.com/scl/fi/p1l4t1o0cob0z9hg3vhpg/unWrapper.mp4?rlkey=vv8l4bzlez4g9w2ypzbd5emce&raw=1',
  //     webm: 'https://www.dropbox.com/scl/fi/07oxt58obkp3uljmsub4u/unwrapped.webm?rlkey=92rqadbn6cclkwfq1oltnd9vk&raw=1',
  //   }
  // }
}
