import { CommonModule, NgOptimizedImage } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { AuthStore } from "../../../../../auth/infrastructure/auth.store";
import { NautilusStore } from "../../../infrastructure/nautilus.store";

@Component({
  selector: "app-nautilus-users",
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: "./users.component.html",
  styles: `
    :host {
      display: block;
      height: 100%;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersComponent {
  readonly store = inject(NautilusStore);
  readonly authStore = inject(AuthStore);

  readonly currentUser = {
    name: "WanderleeDev",
    role: "Administrator",
    avatarUrl:
      "https://avatars.githubusercontent.com/u/116982723?s=400&u=5ba88b3a9814778bc13648887d69047ea4b115c1&v=4",
  };
}
