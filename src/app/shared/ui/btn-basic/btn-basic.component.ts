import { NgOptimizedImage, NgStyle } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IBtnBasic, ICustomStylesBtn } from '../../../interfaces/IBtnData.interface';


@Component({
  selector: 'app-btn-basic',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgStyle,
  ],
  templateUrl: './btn-basic.component.html',
  styles: `:host { display: contents;}`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BtnBasicComponent { 
  @Input({required: true}) btnData!: IBtnBasic;
  @Input() customStyles?: ICustomStylesBtn;
  @Input() titleBtn?: string;
  
}
