import { CommonModule } from '@angular/common';
import { AfterContentInit, ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ElementRef, ViewChild } from '@angular/core';
import { WindowControlComponent } from '../../shared/windowControl/windowControl.component';
import { WindowControllerService } from '../../services/windowController.service';
import { ILogicController } from '../../interfaces/IWindowController';

@Component({
  selector: 'app-memo-pad',
  standalone: true,
  imports: [
    CommonModule,
    WindowControlComponent
  ],
  templateUrl: './memoPad.component.html',
  styles: `:host { display: contents; }`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MemoPadComponent implements OnInit, OnDestroy, AfterContentInit {
  @ViewChild('windowTarget') refComponent!: ElementRef
  logicController?: ILogicController;
  
  constructor(
    private windowController: WindowControllerService,
    private elRef: ElementRef
  ){}

  ngOnInit(): void {
    this.logicController = {
      maximize: this.windowController.maximizeWindow.bind(this.windowController),
      minimize: this.windowController.minimizeWindow.bind(this.windowController),
      close: this.windowController.closeWindow.bind(this.windowController)
    }
  }

  ngOnDestroy(): void {
    console.log('destroy');
  }

  ngAfterContentInit(): void {
    console.log(this.elRef.nativeElement);
    
  }
}
