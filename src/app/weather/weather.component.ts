import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApixuService } from '../apixu.service';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { TranslateService } from '@ngx-translate/core'; 
import { SharedService } from '../shared.service';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  public weatherSearchForm: FormGroup;
  private apixuService: ApixuService;
  public weatherData: any;
  //public selectedLanguage: string = 'en';
  sharedData: string = '';

  SearchFormLabels={
    title: 'Weather Search',
    placeholder: 'Please enter location',
    search: 'Search'
  }


  constructor(private formBuilder: FormBuilder, apixuService: ApixuService, private sharedService: SharedService) {
    this.weatherSearchForm = this.formBuilder.group({
      location: ['']
    });
    this.apixuService = apixuService;
  }

  ngOnInit() { 
    this.sharedService.currentData.subscribe(data => {
      this.sharedData = data;
    });
  }

  sendToAPIXU(formValues : any) {
    this.apixuService
    .getWeather(formValues.location, this.sharedData)
    .subscribe(data => this.weatherData = data)
    console.log(this.weatherData);
    console.log(this.sharedData)
  }
}
