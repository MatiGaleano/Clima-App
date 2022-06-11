import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { WeatherData } from 'src/app/models/weather.interface';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeatherComponent {

  @Input() public weather!: WeatherData;
  public BASE_URL = 'http://openweathermap.org/img/wn'

  constructor() { }

}
