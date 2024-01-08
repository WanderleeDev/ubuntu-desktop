import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BtnFileComponent } from '../../shared/btn-file/btn-file.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DesktopIconsService } from '../../services/desktopIcons.service';
import { Observable } from 'rxjs';
import { IDataIcon } from '../../interfaces/IDataIcon.interface';

@Component({
  selector: 'app-desktop',
  standalone: true,
  imports: [
    CommonModule,
    BtnFileComponent,
    DragDropModule,
    BtnFileComponent
  ],
  templateUrl: './desktop.component.html',
  styles: `
    :host {display: contents;}
    .cdk-drag-preview {
      opacity: .5;
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

  public aux(): void {
    console.log('aux');
  }
}
