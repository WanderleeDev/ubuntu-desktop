import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
//  Components
import { IBtnEditingTask } from "../../../../interfaces/IBtnData.interface";
import { BtnBasicComponent } from "../../../../shared/btn-basic/btn-basic.component";
//  Interfaces
import { TaskActionKey } from "../../../../interfaces/ITask.interface";

@Component({
  selector: "app-task-editing-buttons",
  standalone: true,
  templateUrl: "./taskEditingButtons.component.html",
  styles: `:host {display: contents;}`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, BtnBasicComponent],
})
export class TaskEditingButtonsComponent {
  @Input({required: true}) taskEditingLogic!: Map<TaskActionKey, () => void>;
  private readonly errorMissingKeyMap = 'The key is not present in the task editing logic map.'

  btnTaskList: IBtnEditingTask[] = [
    { 
      label: "change task status", 
      urlSvg: "/assets/clock-icons/clock.svg",
      functionBtn: 'change status' 
    },
    { 
      label: "delete task", 
      urlSvg: "/assets/extra-icons/trash.svg",
      functionBtn: 'delete' 
    },
    { 
      label: "edit task", 
      urlSvg: "/assets/extra-icons/edit.svg",
      functionBtn: 'edit'
    },
  ];

  public applyTaskLogic (key: TaskActionKey) {
    if (!this.taskEditingLogic?.has(key)) throw new Error(`[key: ${key}] ${this.errorMissingKeyMap}`)
    this.taskEditingLogic.get(key)?.()
  }
}
