import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
  model,
  OnInit,
} from "@angular/core";
import { TodoStore } from "../../../infrastructure/todo.store";
import { Task } from "../../../domain/task.interface";

interface IBtnEditingTask {
  label: string;
  icon: string;
  functionBtn: () => void;
}

@Component({
  selector: "app-controls-task",
  standalone: true,
  imports: [],
  templateUrl: "./controls-task.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ControlsTask implements OnInit {
  private readonly todoStore = inject(TodoStore);

  currentTask = input.required<Task>();
  isViewControlTask = model(false);
  isViewEditorTask = model(false);
  btnTaskList: IBtnEditingTask[] = [];

  ngOnInit(): void {
    this.btnTaskList = [
      {
        label: "Cambiar estado",
        icon: "sync_alt",
        functionBtn: (): void => {
          this.todoStore.changeStatusTask(this.currentTask().id);
          this.isViewControlTask.set(false);
        },
      },
      {
        label: "Eliminar",
        icon: "delete",
        functionBtn: (): void => {
          this.todoStore.deleteTask(this.currentTask().id);
        },
      },
      {
        label: "Editar",
        icon: "edit",
        functionBtn: (): void => {
          this.isViewEditorTask.update(prev => !prev);
          this.isViewControlTask.set(false);
        },
      },
    ];
  }
}
