import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-featured-items',
  templateUrl: './featured-items.component.html',
  styleUrls: ['./featured-items.component.css'],
  animations: [
    trigger('slideInFromBottom', [
      state(
        'void',
        style({
          transform: 'translateY(500%)',
        })
      ),
      state('hidden', style({ transform: 'translateY(400%)' })),
      state('visible', style({ transform: 'translateY(0)' })),
      transition('hidden => visible', [animate('1s ease-in')]),
    ]),
  ],
})
export class FeaturedItemsComponent implements OnInit {
  state = 'hidden';
  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.checkVisibility();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkVisibility();
  }

  checkVisibility() {
    const rect = this.el.nativeElement.getBoundingClientRect();
    const viewHeight = Math.max(
      document.documentElement.clientHeight,
      window.innerHeight
    );
    if (!(rect.bottom < 0 || rect.top - viewHeight >= 0)) {
      console.log('header is visible');
      this.state = 'visible';
    }
  }
}
