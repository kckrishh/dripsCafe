import { NgModule, ViewChild } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MenuComponent } from './menu/menu.component';
import { HeroComponent } from './home/hero/hero.component';
import { FeaturedItemsComponent } from './home/featured-items/featured-items.component';
import { InvitationComponent } from './home/invitation/invitation.component';
import { HomeMenuComponent } from './home/home-menu/home-menu.component';
import { FeatureComponent } from './home/feature/feature.component';
import { WokringHoursComponent } from './home/wokring-hours/wokring-hours.component';
import { ReviewsComponent } from './home/reviews/reviews.component';
import { GalleryComponent } from './home/gallery/gallery.component';
import { FooterComponent } from './home/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    MenuComponent,
    HeroComponent,
    FeaturedItemsComponent,
    InvitationComponent,
    HomeMenuComponent,
    FeatureComponent,
    WokringHoursComponent,
    ReviewsComponent,
    GalleryComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
