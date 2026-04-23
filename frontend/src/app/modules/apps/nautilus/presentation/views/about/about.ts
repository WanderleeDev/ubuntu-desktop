import { CommonModule, NgOptimizedImage } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { NautilusStore } from "../../../infrastructure/nautilus.store";

@Component({
  selector: "app-nautilus-about",
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: "./about.html",
  styles: `
    :host {
      display: block;
      height: 100%;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class About {
  readonly store = inject(NautilusStore);

  readonly developerInfo = {
    name: "WanderleeDev",
    role: "Full Stack Developer",
    avatarUrl: "https://avatars.githubusercontent.com/u/116982723?s=400&u=5ba88b3a9814778bc13648887d69047ea4b115c1&v=4",
    bio: "Passionate about building modern, high-performance web applications and desktop-like experiences with Angular and Tailwind CSS.",
    github: "https://github.com/WanderleeDev",
    portfolio: "https://github.com/WanderleeDev",
    email: "wanderleedev@gmail.com"
  };

  readonly systemSpecs = [
    { label: 'OS Name', value: 'Ubuntu 20.04 LTS' },
    { label: 'Developer', value: 'WanderleeDev' },
    { label: 'OS Type', value: '64-bit' },
    { label: 'GNOME Version', value: '3.36.8' },
    { label: 'Windowing System', value: 'X11' },
    { label: 'Kernel Version', value: '5.4.0-generic' },
  ];
}
