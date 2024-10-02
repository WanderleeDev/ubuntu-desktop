import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  input,
  OnDestroy,
} from "@angular/core";
import { Router } from "@angular/router";
import { LoaderComponent } from "../../../../shared/components/loader/loader.component";

@Component({
  standalone: true,
  selector: "app-screen-lock",
  imports: [LoaderComponent],
  templateUrl: "./screen-lock.component.html",
  styleUrls: ["./screen-lock.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScreenLockComponent implements AfterViewInit, OnDestroy {
  #DURATION = 2000;
  redirectRoute = input.required<string>();
  timer?: NodeJS.Timeout;

  constructor(private readonly router: Router) {}

  ngAfterViewInit(): void {
    this.timer = setTimeout(() => this.redirectTo(), this.#DURATION);
  }

  private redirectTo(): void {
    this.router.navigate([this.redirectRoute() || "/home"]);
  }

  ngOnDestroy(): void {
    clearTimeout(this.timer);
  }
}
