import { Component, ElementRef, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-wokring-hours',
  templateUrl: './wokring-hours.component.html',
  styleUrl: './wokring-hours.component.css',
})
export class WokringHoursComponent {
  @Input() parallaxRatio: number = 0.5;

  constructor(private eleRef: ElementRef) {}

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const offset = window.pageYOffset;
    this.eleRef.nativeElement.style.transform = `translateY(${
      offset * this.parallaxRatio
    }px)`;
  }
}
