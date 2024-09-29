import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { UserComponent } from '../../../../shared/components/user/user.component';

@Component({
  selector: 'app-personal-user-card',
  standalone: true,
  imports: [
    UserComponent
  ],
  templateUrl: './personal-user-card.component.html',
  styleUrl: './personal-user-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonalUserCardComponent { 
  username = input<string>('Unknown');
}
