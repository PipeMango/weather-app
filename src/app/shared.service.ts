import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private sharedData = new BehaviorSubject('en');
  currentData = this.sharedData.asObservable();

  constructor() { }

  changeData(data: string) {
    this.sharedData.next(data);
  }
}
