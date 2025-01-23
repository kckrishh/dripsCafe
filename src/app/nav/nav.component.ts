import { Component, HostListener, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent {
  isOpen = false;

  toggleScroll(): void {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      document.body.classList.add('no-scroll');
      this.isOpen = true;
    } else {
      document.body.classList.remove('no-scroll');
      this.isOpen = false;
    }
  }

  isScrolled = false;
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    this.isScrolled = scrollTop > 50;
  }
}
