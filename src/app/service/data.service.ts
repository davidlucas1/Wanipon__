import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public animemassa = [];
  public messageSource = new BehaviorSubject(this.animemassa);
  currentMessage = this.messageSource.asObservable();

  constructor() {
    //this.animemassa = [];
   }
  changeMessage(seila){
    this.messageSource.next(seila);
  }
}
