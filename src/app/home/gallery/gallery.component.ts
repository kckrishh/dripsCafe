import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css',
})
export class GalleryComponent {
  images: string[] = ['img1', 'img2', 'img3', 'img4', 'img5', 'img6'];

  isOpen: boolean = false;
  selectedImage: string | null = null;

  toggleOverlay(image?: string): void {
    this.isOpen = !this.isOpen;
    this.selectedImage = image || null;
    if (this.isOpen) {
      document.body.classList.add('no-scroll');
      this.isOpen = true;
    } else {
      document.body.classList.remove('no-scroll');
      this.isOpen = false;
    }
  }

  lightbox(): void {}
}
