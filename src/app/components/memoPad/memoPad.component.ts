import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { WindowControlComponent } from '../../shared/ui/windowControl/windowControl.component';
import { WindowControllerService } from '../../services/windowController.service';
import { ILogicController } from '../../interfaces/IWindowController';
import { DragDropModule } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-memo-pad',
  standalone: true,
  imports: [
    CommonModule,
    WindowControlComponent,
    DragDropModule
  ],
  templateUrl: './memoPad.component.html',
  styles: `:host { display: contents; }`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MemoPadComponent implements OnInit {
  logicController?: ILogicController;
  
  constructor(
    private windowController: WindowControllerService
  ){}

  ngOnInit(): void {
    this.logicController = {
      maximize: this.windowController.maximizeWindow.bind(this.windowController),
      minimize: this.windowController.minimizeWindow.bind(this.windowController),
      close: this.windowController.closeWindow.bind(this.windowController)
    }
  }
}
