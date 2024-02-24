import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather-main',
  templateUrl: './weather-main.component.html',
  styleUrls: ['./weather-main.component.css']
})
export class WeatherMainComponent implements OnInit {

  myWeather: any;
  location: any;
  country: any;
  weather: any;
  temperature: any;
  imgLink: any;

  cityName: string = 'Tbilisi'; // Default location set to Tbilisi
  weatherIcon: string | undefined;

  constructor(private weatherService: WeatherService) {}

  getWeather() {
    if (this.cityName) {
      this.weatherService.getWeatherDetails(this.cityName).subscribe((data: any) => {
        this.myWeather = data;
        this.location = this.myWeather.name;
        this.country = this.myWeather.sys.country;
        this.weather = this.myWeather.weather[0].main;
        this.temperature = Math.round(this.myWeather.main.temp);
        this.weatherIcon = `http://openweathermap.org/img/wn/${this.myWeather.weather[0].icon}.png`;
      }, error => {
        console.error('Error fetching weather data:', error);
      });
    } else {
      console.error('Please enter a city name.');
    }
  }

  ngOnInit(): void {
    this.getWeather(); // Fetch weather details for the default location (Tbilisi) when component initializes
  }
}
