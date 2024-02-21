import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SectionOneContentComponent } from './components/section-one-content/section-one-content.component';
import { FooterComponent } from './components/footer/footer.component';
import { SectionThreeContentComponent } from './components/section-three-content/section-three-content.component';
import { DeedItemComponent } from './components/section-three-content/deed-item/deed-item.component';
import { CarbonItemComponent } from './components/section-three-content/carbon-item/carbon-item.component';
import { CarouselComponent } from './components/section-three-content/carousel/carousel.component';
import { CarouselItemComponent } from './components/section-three-content/carousel/carousel-item/carousel-item.component';
import { DragScrollModule } from 'ngx-drag-scroll';
import { SectionFourContentComponent } from './components/section-four-content/section-four-content.component';
import { SectionTwoContentComponent } from './components/section-two-content/section-two-content.component';
import { BigCarouselComponent } from './components/section-two-content/big-carousel/big-carousel.component';
import { BigCarouselItemComponent } from './components/section-two-content/big-carousel/big-carousel-item/big-carousel-item.component';
import { NgxSplideModule } from 'ngx-splide';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SectionOneContentComponent,
    FooterComponent,
    SectionThreeContentComponent,
    DeedItemComponent,
    CarbonItemComponent,
    CarouselComponent,
    CarouselItemComponent,
    SectionFourContentComponent,
    SectionTwoContentComponent,
    BigCarouselComponent,
    BigCarouselItemComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, DragScrollModule, NgxSplideModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
