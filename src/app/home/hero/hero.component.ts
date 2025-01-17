import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  offset = 0;

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    requestAnimationFrame(() => {
      this.offset = window.pageYOffset;
    });
  }
}
