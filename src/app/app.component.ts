import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherData } from './models/weather.interface';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Clima App';

  public weather$!: Observable<WeatherData>;

  constructor (
    private readonly wather: WeatherService
  ){}

  public onSearch(city: string): void {
    this.weather$ = this.wather.getWeatherbyCity(city);
  }
}
