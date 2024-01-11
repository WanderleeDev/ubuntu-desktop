import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { HelperScoutService } from '../../services/helperScout.service';

@Component({
  selector: 'app-help-scout',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './helpScout.component.html',
  styles: [`:host {display: contents;}`],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HelpScoutComponent {
  isInteractive = false;
  private helperScoutSvc = inject(HelperScoutService)

  public activeHelper(): void {
    this.helperScoutSvc.activateHelper()
  }
}
