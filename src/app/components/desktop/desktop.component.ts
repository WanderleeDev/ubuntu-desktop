import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
//  Components
import { BtnFileComponent } from '../../shared/btn-file/btn-file.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DesktopIconsService } from '../../services/desktopIcons.service';
//  Interfaces
import { IDataIcon } from '../../interfaces/IDataIcon.interface';

@Component({
  selector: 'app-desktop',
  standalone: true,
  imports: [
    CommonModule,
    BtnFileComponent,
    DragDropModule,
    BtnFileComponent,
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
export class DesktopComponent implements OnInit {
  desktopIcons$?: Observable<IDataIcon[]>;

  constructor(
    private desktopIconsSvc: DesktopIconsService
  ) {}

  ngOnInit(): void {
    this.desktopIcons$ = this.desktopIconsSvc.getDesktopIcons();
  }

  public fileHandler(): void {
    console.log('double click');
  }
}
