import { Component, OnInit } from '@angular/core';
import { WeatherData, CurrentConditionsDisplay } from './observer.type';

@Component({
  selector: 'app-observer',
  templateUrl: './observer.component.html',
  styleUrls: ['./observer.component.less']
})
export class ObserverComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const weatherData = new WeatherData();
    const currentDisplay = new CurrentConditionsDisplay(weatherData);

    weatherData.setMeasurements(1, 2, 3);

    weatherData.removeObserver(currentDisplay);

    weatherData.setMeasurements(1, 2, 4);

    currentDisplay.display();

    // TODO: 使用 rxjs 实现这个案例
  }

}
