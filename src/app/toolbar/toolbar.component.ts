import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { Inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core'; 
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
  providers: [MatIconModule, MatButtonModule, MatToolbarModule]

})
export class ToolbarComponent {

  selectLang: string = '';
  TransLang: string[] = [];

  constructor(public translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.addLangs(['en', 'es']);
    translate.use('en');
  }

  setTransLanguage() {
    this.translate.use(this.selectLang);
  }

    getTransLanguage(){
      this.TransLang =[...this.translate.getLangs()];
    }

    ngOnInit(){
      this.getTransLanguage();
    }

}
