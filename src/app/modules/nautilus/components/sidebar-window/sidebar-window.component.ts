import { ChangeDetectionStrategy, Component } from "@angular/core";
import { ISidebarSection } from "../../interfaces/sidebar.interface";
import { RouterLink } from "@angular/router";
import { KeyValuePipe } from "@angular/common";

@Component({
  selector: "app-sidebar-window",
  standalone: true,
  imports: [ RouterLink, KeyValuePipe],
  templateUrl: "./sidebar-window.component.html",
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarWindowComponent {
  readonly sideBarLinks: ISidebarSection = {
    red: [
      {
        name: "Wi-Fi",
        icon: "wifi",
        href: "#",
      },
      {
        name: "Network",
        icon: "network",
        href: "#",
      },

      {
        name: "Bluetooth",
        icon: "bluetooth",
        href: "#",
      },
    ],
    appearance: [
      {
        name: "Background",
        icon: "Background",
        href: "#",
      },
      {
        name: "Appearance",
        icon: "appearance",
        href: "#",
      },
      {
        name: "Notifications",
        icon: "notifications",
        href: "#",
      },
      {
        name: "Search",
        icon: "search",
        href: "#",
      },
      {
        name: "Multitasking",
        icon: "multitasking",
        href: "#",
      },
    ],
    extra: [
      {
        name: "Applications",
        icon: "applications",
        href: "#",
        subRoutes: [
          {
            name: "App Store",
            icon: "app-store",
            href: "#",
          },
          {
            name: "Calendar",
            icon: "calendar",
            href: "#",
          },
          {
            name: "Contacts",
            icon: "contacts",
            href: "#",
          },
        ],
      },
      {
        name: "Privacy",
        icon: "privacy",
        href: "#",
        subRoutes: [
          {
            name: "Privacy Center",
            icon: "privacy-center",
            href: "#",
          },
          {
            name: "Safety Center",
            icon: "safety-center",
            href: "#",
          },
          {
            name: "Security",
            icon: "security",
            href: "#",
          },
        ],
      },
      {
        name: "Online Accounts",
        icon: "online-accounts",
        href: "#",
      },
      {
        name: "Sharing",
        icon: "sharing",
        href: "#",
      },
    ],
    system: [
      {
        name: "Sound",
        icon: "sound",
        href: "#",
      },
      {
        name: "Power",
        icon: "power",
        href: "#",
      },
      {
        name: "Displays",
        icon: "displays",
        href: "#",
      },
    ],
  };
}
