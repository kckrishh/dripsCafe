import { Component, ElementRef, ViewChild } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-featured-items',
  templateUrl: './featured-items.component.html',
  styleUrl: './featured-items.component.css',
})
export class FeaturedItemsComponent {
  // @ViewChild('header', { static: true }) header!: ElementRef;
  // @ViewChild('articles', { static: true }) articles!: ElementRef;
  // constructor() {}
  // ngAfterViewInit(): void {
  //   const header = this.header.nativeElement;
  //   const articles = this.articles.nativeElement.querySelectorAll('article');
  //   // Header Animation (from bottom)
  //   gsap.from(header, {
  //     y: 600,
  //     opacity: 0,
  //     duration: 2.5,
  //     ease: 'power3.out',
  //     scrollTrigger: {
  //       trigger: header,
  //       start: 'top 60%', // Start when 80% of the viewport reaches the header
  //     },
  //   });
  //   // Articles Animation
  //   articles.forEach((article: HTMLElement, index: number) => {
  //     const animationProps = {
  //       x: index === 0 ? 800 : index === articles.length - 1 ? -800 : 0, // Left for the first, right for the last, bottom for middle
  //       y: index === 1 ? 800 : 0, // Bottom only for the middle
  //       opacity: 0,
  //       duration: 2.5,
  //       ease: 'power3.out',
  //       scrollTrigger: {
  //         trigger: article,
  //         start: 'top 60%', // Start animation when the article enters the viewport
  //       },
  //     };
  //     gsap.from(article, animationProps);
  //   });
  // }
}
