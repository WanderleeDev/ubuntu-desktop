import {
  ChangeDetectionStrategy,
  Component,
  input,
  model,
} from "@angular/core";
import { BtnBasicComponent } from "../../../../shared/components/btn-basic/btn-basic.component";
import { TodoStore } from "../../store/todo.store";
import { Task } from "../../interface/task.interface";
import { TaskEditorComponent } from "../task-editor/task-editor.component";

interface IBtnEditingTask {
  label: string;
  urlSvg: string;
  functionBtn: () => void;
}

@Component({
  selector: "app-controls-task",
  standalone: true,
  imports: [BtnBasicComponent, TaskEditorComponent],
  templateUrl: "./controls-task.component.html",
  styleUrl: "./controls-task.component.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ControlsTaskComponent {
  currentTask = input.required<Task>();
  isViewEditorTask = model(false);
  btnTaskList: IBtnEditingTask[] = [];

  constructor(private readonly todoStore: TodoStore) {
    this.btnTaskList = [
      {
        label: "change task status",
        urlSvg: "/assets/extra-icons/exchange.svg",
        functionBtn: (): void => {
          this.todoStore.changeStatusTask(this.currentTask().id);
        },
      },
      {
        label: "delete task",
        urlSvg: "/assets/extra-icons/trash.svg",
        functionBtn: (): void => {
          this.todoStore.deleteTask(this.currentTask().id);
        },
      },
      {
        label: "edit task",
        urlSvg: "/assets/extra-icons/edit.svg",
        functionBtn: (): void => {
          this.isViewEditorTask.update(prev => !prev);
        },
      },
    ];
  }
}
