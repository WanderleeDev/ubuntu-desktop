import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IBtnData } from '../../interfaces/IBtnData.interface';


@Component({
  selector: 'app-btn-basic',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './btn-basic.component.html',
  styles: `:host { display: contents;}`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BtnBasicComponent { 
  @Input({required: true}) btnData!: IBtnData;
}
