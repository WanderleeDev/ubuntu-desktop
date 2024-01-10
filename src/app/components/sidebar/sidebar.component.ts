import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { BtnFileComponent } from '../../shared/btn-file/btn-file.component';
import { CdkDrag, CdkDragDrop, CdkDropList, CdkDropListGroup, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { IDataIcon, ISidebarIcons } from '../../interfaces/IDataIcon.interface';
import { SidebarService } from '../../services/sidebar.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    BtnFileComponent,
    CdkDropList,
    CdkDrag,
    CdkDropListGroup
  ],
  templateUrl: './sidebar.component.html',
  styles: `:host {
    display: block;
    grid-column: 1/2;
    grid-row: 2/3;
    z-index: 1;
  }`,
  changeDetection: ChangeDetectionStrategy.Default,
})

export class SidebarComponent implements OnInit {
  sidebarIcons?: Observable<ISidebarIcons>;
  private sidebarSvc = inject(SidebarService);
  
  ngOnInit(): void {
    this.sidebarIcons = this.sidebarSvc.getObservableIcons$()
  }

  public drop(event: CdkDragDrop<IDataIcon[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
