import { Component } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  about = [
    {
      title: "hourly",
      
    },
    {
      title: "daily"
      
    },
    {
      title: "weekly",
      
    },
    {
      title: "monthly",
      
    },
  ]


  // cityName: string | undefined;

  // constructor(private weatherService: WeatherService) { }

  // getWeather() {
  //   if (this.cityName) {
  //     this.weatherService.getWeatherDetails(this.cityName).subscribe((data: any) => {
  //       console.log(data); // Do something with the weather data
  //     }, error => {
  //       console.error('Error fetching weather data:', error);
  //     });
  //   } else {
  //     console.error('Please enter a city name.');
  //   }
  // }
}
