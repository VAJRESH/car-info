import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { CardComponent } from './card/card.component';
import { CarsListComponent } from './cars-list/cars-list.component';
import { HeaderComponent } from './header/header.component';
import { ToastMessagesComponent } from './toast-messages/toast-messages.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [AppComponent, WelcomeComponent, CarsListComponent, CarDetailComponent, ToastMessagesComponent, HeaderComponent, CardComponent],
  imports: [BrowserModule, AppRoutingModule ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
