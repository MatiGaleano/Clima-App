import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { Coord, WeatherData } from 'src/app/models/weather.interface';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private readonly API_URL: any = environment.API_URL;
  private readonly API_KEY: any = environment.API_KEY;


  constructor(
    private http: HttpClient
  ) { }

  getWeatherbyCity(city: string): Observable<WeatherData>{
    const params = new HttpParams()
    .set('q', city)
    .set('units', 'metric')
    .set('appid', this.API_KEY)
    .set('lang', 'es');
    
    return this.http.get<WeatherData>(`${this.API_URL}`, { params });
  }

  getWeatherbyCoord(coord:Coord ): Observable<WeatherData>{
    const params = new HttpParams()
    .set('lat', coord.lat)
    .set('lon', coord.lon)
    .set('units', 'metric')
    .set('appid', this.API_KEY)
    .set('lang', 'es');

    return this.http.get<WeatherData>(`${this.API_URL}`, { params });
  }
}
