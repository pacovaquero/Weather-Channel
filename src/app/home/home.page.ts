import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';



const API_URL = environment.API_URL1;
const API_KEY = environment.API_KEY1;


interface WeatherData {
  main: {
     temp: number;
     temp_max: number;
     temp_min: number;
     humidity: number;
  };
  name: string;
  weather: [
     {
       icon: string;
     }
  ];
 }


 type WeatherTemp = {
  temp: number;
  temp_max: number;
  temp_min: number;
  humidity: number;
 };




@Component({
 selector: 'app-home',
 templateUrl: 'home.page.html',
 styleUrls: ['home.page.scss'],
})


export class HomePage {
  
  weatherTemp: WeatherTemp = {
    temp: 0,
    temp_max: 0,
    temp_min: 0,
    humidity: 0,
   };
todayDate = new Date();
cityName = ""
weatherIcon: string='';
weatherDeatails: { icon: string } = { icon: '' };
name=""
loading=true

 constructor(public httpClient: HttpClient) {
  //this.loadData();
 }

 loadData() {
  this.httpClient
    .get<WeatherData>(`${API_URL}/weather?q=${this.cityName}&appid=${API_KEY}`)
    .subscribe(
      (results: WeatherData) => {
        console.log(results);
        this.weatherTemp = results.main;
        this.name = results.name;
        console.log(this.weatherTemp);
        this.weatherDeatails = results.weather[0];
        console.log(this.weatherDeatails);
        this.weatherIcon = `https://openweathermap.org/img/wn/${this.weatherDeatails.icon}@4x.png`;
        this.loading = false;
      },
      (error) => {
        console.error('An error occurred:', error);
      }
    );
}
}