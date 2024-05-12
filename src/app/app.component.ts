import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SeoService } from './services/seo.service';
import { TranslatorService } from './modules/translator/services/translator.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `<router-outlet />`
})
export class AppComponent implements OnInit {
  title = 'Wanderlee porfolio';
  trans = inject(TranslatorService)

  constructor(private seoSvc: SeoService) {}

  ngOnInit(): void {
    this.seoSvc.title.setTitle(this.title);
    this.seoSvc.meta.updateTag({
      name: 'description',
      content: 'Descubre mi portafolio como desarrollador front-end. Con habilidades sólidas en HTML, CSS, JavaScript, TypeScript y experiencia en Angular, me especializo en el diseño responsivo. Explora proyectos que reflejan mi enfoque práctico y colaborativo.'
    });
    this.seoSvc.setIndexFollow(true);

    // this.trans.translateText("Life's brief, Like a leaf, In the wind's thief.", 'English', 'Spanish')
  }
}
