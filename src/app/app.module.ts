import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherMainComponent } from './components/weather-main/weather-main.component';
import { DetailsComponent } from './components/details/details.component';
import { SliderComponent } from './components/slider/slider.component';
import { CardsComponent } from './components/cards/cards.component';
import { ClockComponent } from './components/clock/clock.component';
import { WeatherFullComponent } from './components/weather-full/weather-full.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    WeatherMainComponent,
    DetailsComponent,
    SliderComponent,
    CardsComponent,
    ClockComponent,
    WeatherFullComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
