import { CommonModule } from "@angular/common";
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  Input,
  OnInit,
  signal,
} from "@angular/core";
//  Components
import { BtnBasicComponent } from "../../../../shared/components/btn-basic/btn-basic.component";
import { TaskEditorComponent } from "../taskEditor/taskEditor.component";
//  Interfaces
import { ITask } from "../../../../interfaces/ITask.interface";
//  Services
import { TaskEditingButtonsComponent } from "../taskEditingButtons/taskEditingButtons.component";
//  Pipe
import { CapitalizePipe } from "../../../../shared/pipes/capitalize.pipe";
import { FormatListPipe } from "../../../../shared/pipes/formatList.pipe";
import { Task } from "../../store/model/todo.state";

@Component({
  selector: "app-task",
  standalone: true,
  templateUrl: "./task.component.html",
  styleUrls: ["./task.component.css"],
  styles: `:host {  display: contents;}`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    BtnBasicComponent,
    TaskEditorComponent,
    TaskEditingButtonsComponent,
    CapitalizePipe,
    FormatListPipe,
  ],
})
export class TaskComponent {
  task = input.required<Task>();
  indexTask = input.required<number>();
  taskStatusStream = computed(() => `[${this.task().status}] : `)
  fnEditTask!: (editedTask: ITask) => void;
  isViewControlTask = signal(false);
  isContentEditable = signal(false);

  public toggleControlTask(): void {
    this.isViewControlTask.update((prevValue) => !prevValue);
  }
}
