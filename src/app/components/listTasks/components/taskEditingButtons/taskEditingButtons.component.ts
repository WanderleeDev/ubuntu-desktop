import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { IBtnEditingTask } from "../../../../interfaces/IBtnData.interface";
import { BtnBasicComponent } from "../../../../shared/btn-basic/btn-basic.component";

@Component({
  selector: "app-task-editing-buttons",
  standalone: true,
  templateUrl: "./taskEditingButtons.component.html",
  styles: `:host {display: contents;}`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, BtnBasicComponent],
})
export class TaskEditingButtonsComponent {
  @Input({required: true}) fnChangeStatus!: () => void;  
  @Input({required: true}) fnDeleteTask!: () => void;
  @Input({required: true}) fnToggleEditPanel!: () => void;

  btnTaskList: IBtnEditingTask[] = [
    { 
      label: "programming task", 
      urlSvg: "/assets/clock-icons/clock.svg",
      functionBtn: 'change status' 
    },
    { 
      label: "delete task", 
      urlSvg: "/assets/extra-icons/trash.svg",
      functionBtn: 'delete task' 
    },
    { 
      label: "edit task", 
      urlSvg: "/assets/extra-icons/edit.svg",
      functionBtn: 'edit task'
    },
  ];
}
