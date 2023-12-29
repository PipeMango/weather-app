import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApixuService } from '../apixu.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  public weatherSearchForm: FormGroup;
  private apixuService: ApixuService;
  public weatherData: any;
  public selectedLanguage: string = 'en';

  SearchFormLabels={
    title: 'Weather Search',
    placeholder: 'Please enter location',
    search: 'Search'
  }


  constructor(private formBuilder: FormBuilder, apixuService: ApixuService) {
    this.weatherSearchForm = this.formBuilder.group({
      location: ['']
    });
    this.apixuService = apixuService;
  }

  ngOnInit() { 
  }

  sendToAPIXU(formValues : any) {
    this.apixuService
    .getWeather(formValues.location, this.selectedLanguage)
    .subscribe(data => this.weatherData = data)
    console.log(this.weatherData);
  }
}
