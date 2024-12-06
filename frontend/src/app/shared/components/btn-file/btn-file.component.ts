import { NgClass, NgOptimizedImage, NgStyle } from "@angular/common";
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  booleanAttribute,
  input,
} from "@angular/core";
import { MatTooltipModule } from "@angular/material/tooltip";
import { LabelPosition } from "../../types/LabelPosition.type";

@Component({
  selector: "app-btn-file",
  standalone: true,
  imports: [NgOptimizedImage, MatTooltipModule, NgStyle, NgClass],
  templateUrl: "./btn-file.component.html",
  styleUrl: "./btn-file.component.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BtnFileComponent {
  labelDirection = input<LabelPosition>("right");
  @Input() nameFile?: string;
  @Input() label?: string;
  @Input({ required: true }) size = 10;
  @Input({ required: true }) icon = "assets/folder.svg";
  @Input({ transform: booleanAttribute }) priority?: boolean;
  @Input({ transform: booleanAttribute }) hasInteractivity?: boolean;
  @Input() handleFile?: () => void;
  @Input() customClass?: string;

  public handleButton(): void {
    if (!this.handleFile) return;

    this.handleButton();
  }
}
