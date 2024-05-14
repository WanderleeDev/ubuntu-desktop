import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SeoService } from './services/seo.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet],
  template: `<router-outlet />`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  title = 'Wanderlee porfolio';

  constructor(private seoSvc: SeoService) {}

  ngOnInit(): void {
    this.seoSvc.title.setTitle(this.title);
    this.seoSvc.meta.updateTag({
      name: 'description',
      content: 'Descubre mi portafolio como desarrollador front-end. Con habilidades sólidas en HTML, CSS, JavaScript, TypeScript y experiencia en Angular, me especializo en el diseño responsivo. Explora proyectos que reflejan mi enfoque práctico y colaborativo.'
    });
    this.seoSvc.setIndexFollow(true);
  }
}
