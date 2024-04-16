import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContactComponent } from './components/contact/contact.component';
import { InfoContentComponent } from './components/info-content/info-content.component';
import { HomeContainerComponent } from './containers/home-container/home-container.component';
import { ContactContainerComponent } from './containers/contact-container/contact-container.component';
import { ServicesComponent } from './components/services/services.component';
import { ServicesContainerComponent } from './containers/services-container/services-container.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { ReviewsContainerComponent } from './containers/reviews-container/reviews-container.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    ContactComponent,
    InfoContentComponent,
    HomeContainerComponent,
    ContactContainerComponent,
    ServicesComponent,
    ServicesContainerComponent,
    ReviewsComponent,
    ReviewsContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
