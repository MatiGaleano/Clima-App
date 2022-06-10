import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { Coord, WeatherData } from '../models/weather.interface';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private readonly Api_Url = environment.weatherApi.url;


  constructor(
    private http: HttpClient
  ) { }

  getWeatherbyCity(city: string): Observable<WeatherData>{
    const params = new HttpParams()
    .set('q', city)
    .set('units', 'metric')
    .set('appid', environment.weatherApi.key)
    .set('lang', 'es');
    
    return this.http.get<WeatherData>(`${this.Api_Url}`, { params });
  }

  getWeatherbyCoord(coord:Coord ): Observable<WeatherData>{
    const params = new HttpParams()
    .set('lat', coord.lat)
    .set('lon', coord.lon)
    .set('units', 'metric')
    .set('appid', environment.weatherApi.key)
    .set('lang', 'es');

    return this.http.get<WeatherData>(`${this.Api_Url}`, { params });
  }
}
