import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
//  interface
import { IAccordionData } from '../../interfaces/IAccordionData.interface';

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccordionComponent { 
  @Input({required: true}) accordionData?: Partial<IAccordionData>; 
}
