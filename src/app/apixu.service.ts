import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) { }

  getWeather(location : any, lang : string) {
    return this.http.get('http://api.weatherapi.com/v1/current.json?key=0a1e2572931b44baa1b155146232812&q=' + location + '&lang=' + lang);
  }
}
