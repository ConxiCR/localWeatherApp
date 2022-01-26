import { Component, OnInit } from '@angular/core';
import { ICurrentWeather } from '../interface';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {

  current: ICurrentWeather

  constructor() { 
    this.current = {
      city:'Bethesda',
      country: 'US',
      date: new Date(),
      image: 'assets/img/cold1.png',
      description: 'Freezen',
    } as ICurrentWeather
  }

  ngOnInit(): void {
  }

}
