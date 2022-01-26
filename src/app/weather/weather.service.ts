import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface ICurrentWeatherData{
  weather: [{
    description: string,
    icon: string
  }],
  main: {
    temp: number
  },
  sys: {
    country: string
  },
  dt: number,
  name: string
}

@Injectable({
  providedIn: 'root' 
})

export class WeatherService {

  constructor(private httClient: HttpClientModule) { }
}
