import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(
    @Inject(DOCUMENT) private document:Document,
    public title: Title,
    public meta: Meta,
  ){}

  setCanonicalURL(url?: string) {
    const canURL = url === undefined ? this.document.URL : url;
    const head = this.document.getElementsByTagName('head')[0];
    let element: HTMLLinkElement | null = this.document.querySelector("link[rel='canonical']") || null;

    if (!element) {
      element = this.document.createElement('link') as HTMLLinkElement;
      head.appendChild(element);
    }

    element.setAttribute('rel', 'canonical');
    element.setAttribute('href', canURL);
  }

  setIndexFollow(state = true) {
    this.meta.updateTag({ 
      name: 'robots', 
      content: state ? 'index, follow' : 'noindex, nofollow' 
    });
  }
}
