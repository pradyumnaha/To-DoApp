import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {
  private loggedIn: boolean = false;
  private nameSubject = new BehaviorSubject<string>("User");
  currentNameSubject = this.nameSubject.asObservable();
  constructor(){}

 sendUserName(message:string) {
   this.nameSubject.next(message);
 }

 setLoggedIn(loginVal){
   this.loggedIn = loginVal;
 }


 getLoggedIn(){
   return this.loggedIn;
 }
 

}
