import { ChangeDetectionStrategy, Component } from "@angular/core";
import { ISidebarSection } from "../../interfaces/sidebar.interface";
import { RouterLink } from "@angular/router";
import { KeyValuePipe } from "@angular/common";
import { AccordionComponent } from "../../../../shared/ui/accordion/accordion.component";
import { DividerXComponent } from "../../../../shared/components/divider-x/divider-x.component";

@Component({
  selector: "app-sidebar-window",
  standalone: true,
  imports: [RouterLink, KeyValuePipe, AccordionComponent, DividerXComponent],
  styleUrls: ["./sidebar-window.component.css"],
  templateUrl: "./sidebar-window.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarWindowComponent {
  readonly sideBarLinks: ISidebarSection = {
    red: [
      {
        name: "Wi-Fi",
        icon: "wifi",
      },
      {
        name: "Network",
        icon: "network",
      },
      {
        name: "Bluetooth",
        icon: "bluetooth",
      },
    ],
    appearance: [
      {
        name: "Background",
        icon: "Background",
      },
      {
        name: "Appearance",
        icon: "appearance",
      },
      {
        name: "Notifications",
        icon: "notifications",
      },
      {
        name: "Search",
        icon: "search",
      },
      {
        name: "Multitasking",
        icon: "multitasking",
      },
    ],
    extra: [
      {
        name: "Applications",
        icon: "applications",
        subRoutes: [
          {
            name: "App Store",
            icon: "app-store",
          },
          {
            name: "Calendar",
            icon: "calendar",
          },
          {
            name: "Contacts",
            icon: "contacts",
          },
        ],
      },
      {
        name: "Privacy",
        icon: "privacy",
        subRoutes: [
          {
            name: "Privacy Center",
            icon: "privacy-center",
          },
          {
            name: "Safety Center",
            icon: "safety-center",
          },
          {
            name: "Security",
            icon: "security",
          },
        ],
      },
      {
        name: "Online Accounts",
        icon: "online-accounts",
      },
      {
        name: "Sharing",
        icon: "sharing",
      },
    ],
    system: [
      {
        name: "Sound",
        icon: "sound",
      },
      {
        name: "Power",
        icon: "power",
      },
      {
        name: "Displays",
        icon: "displays",
      },
    ],
  };

  public onClick(): void {
    console.log("clicked");
  }
}
