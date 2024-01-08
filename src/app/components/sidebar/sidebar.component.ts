import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BtnFileComponent } from '../../shared/btn-file/btn-file.component';
import { CdkDrag, CdkDragDrop, CdkDropList, CdkDropListGroup, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { IDataIcon } from '../../interfaces/IDataIcon.interface';

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
  styles: `:host { display: contents; }`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class SidebarComponent {
  mainIcons: IDataIcon[] = [
    {
      id: crypto.randomUUID(),
      icon: 'assets/folder.svg',
      name: 'folder'
    },
    {
      id: crypto.randomUUID(),
      icon: 'assets/sidebarIcons/edge.svg',
      name: 'edge'
    },
    {
      id: crypto.randomUUID(),
      icon: 'assets/sidebarIcons/brave.svg',
      name: 'brave'
    },
    {
      id: crypto.randomUUID(),
      icon: 'assets/sidebarIcons/firefox.svg',
      name: 'firefox'
    },
    {
      id: crypto.randomUUID(),
      icon: 'assets/sidebarIcons/chrome.svg',
      name: 'chrome'
    },
    {
      id: crypto.randomUUID(),
      icon: 'assets/sidebarIcons/vsc.svg',
      name: 'visual code'
    },
    {
      id: crypto.randomUUID(),
      icon: 'assets/sidebarIcons/github.svg',
      name: 'github'
    },
    {
      id: crypto.randomUUID(),
      icon: 'assets/sidebarIcons/discord.svg',
      name: 'discord',
    }
  ]
  secondaryIcons: IDataIcon[] = [
    {
      id: crypto.randomUUID(),
      icon: 'assets/sidebarIcons/github.svg',
      name: 'github'
    },
    {
      id: crypto.randomUUID(),
      icon: 'assets/sidebarIcons/trash.svg',
      name: 'discord',
    }
  ]

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
