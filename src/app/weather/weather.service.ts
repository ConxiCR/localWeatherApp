import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';



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

  constructor(private httClient: HttpClient) { }

  getCurrentWeather(city:string, country:string){
    return this.httClient.get<ICurrentWeatherData>(`${environment.baseUrl}api.openweathermap.org/data/2.5/weather?`+`q=${city},${country}&appid=${environment.appId}`)
  }
}
