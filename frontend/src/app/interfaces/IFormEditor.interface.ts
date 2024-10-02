import { FormControl } from "@angular/forms";

export interface IFormEditor {
  task: FormControl<string>;
  status: FormControl<string>;
}
