import { Component } from "@angular/core";

@Component({
  selector: "app-navbar-desktop",
  imports: [],
  templateUrl: "./navbar-desktop.component.html",
})
export class NavbarDesktopComponent {
  currentTime = "";

  constructor() {
    this.updateTime();
    setInterval(() => this.updateTime(), 60000);
  }

  updateTime() {
    const now = new Date();
    this.currentTime = now.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      weekday: "short",
    }) + " " + now.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  }
}
