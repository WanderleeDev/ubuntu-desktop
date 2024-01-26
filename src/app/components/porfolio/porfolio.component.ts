import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-porfolio',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './porfolio.component.html',
  styleUrl: './porfolio.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PorfolioComponent { }
