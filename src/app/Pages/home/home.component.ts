import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BtnFileComponent } from '../../shared/btn-file/btn-file.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { MemoPadComponent } from '../../components/memoPad/memoPad.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    BtnFileComponent,
    SidebarComponent,
    DragDropModule,
    MemoPadComponent
  ],
  templateUrl: './home.component.html',
  styles: `:host { display: contents; }`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HomeComponent {
}
