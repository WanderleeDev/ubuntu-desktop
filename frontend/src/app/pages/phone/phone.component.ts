import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-phone",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./phone.component.html",
  styleUrl: "./phone.component.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhoneComponent {}
