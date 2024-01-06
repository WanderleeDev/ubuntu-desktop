import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-nautilus',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './nautilus.component.html',
  styles: `:host {display: contents; }`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NautilusComponent { }
