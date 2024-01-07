import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BtnFileComponent } from '../../shared/btn-file/btn-file.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DesktopIconsService } from '../../services/desktopIcons.service';
import { Observable } from 'rxjs';
import { IDesktopIcon } from '../../interfaces/IDesktopIcon.interface';

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
  styles: `:host {display: contents;}`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DesktopComponent implements OnInit {
  desktopIcons$?: Observable<IDesktopIcon[]>;

  constructor(
    private desktopIconsSvc: DesktopIconsService
  ) {}

  ngOnInit(): void {
    this.desktopIcons$ = this.desktopIconsSvc.getDesktopIcons()
  }
}
