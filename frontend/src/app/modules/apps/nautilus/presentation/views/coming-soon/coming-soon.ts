import { ChangeDetectionStrategy, Component, input } from "@angular/core";

@Component({
  selector: "app-nautilus-coming-soon",
  imports: [],
  templateUrl: "./coming-soon.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComingSoon {
  readonly sectionLabel = input.required<string>();
}
