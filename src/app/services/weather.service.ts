import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = '7104f2ab2922597f4054af3ec9af06f7'; // Replace with your actual API key
  private apiUrl = 'http://api.openweathermap.org/data/2.5/weather'; // API base URL

  

  constructor(private http: HttpClient) { }

  getWeatherDetails(cityName: string) {
    const apiUrlWithParams = `${this.apiUrl}?q=${cityName}&appid=${this.apiKey}&units=metric`;
    console.log(apiUrlWithParams);
    return this.http.get(apiUrlWithParams);
  }  
}