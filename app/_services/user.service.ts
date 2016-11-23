// user.service.ts
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import { User } from '../_models/user';


@Injectable()
export class UserService {
  private loggedIn = false;

  private _apiUrl = "app/login";

  constructor(private http: Http) {
    this.loggedIn = !!localStorage.getItem('auth_token');
  }


  public login(username, password) : Promise<User[]> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    console.log('posting data now');
 
    return this.http.get(this._apiUrl)
        .toPromise()
        .then(response => response.json().data as User[]);
  }
  

//   login(username, password) {
//     let headers = new Headers();
//     headers.append('Content-Type', 'application/json');

//     console.log('posting data now');


//     return this.http.post('app/login', 
//         JSON.stringify({ username, password }), { headers })
//         .map(res => res.json()).map((res) => {
//         if (res.success) {
//           localStorage.setItem('auth_token', res.auth_token);
//           this.loggedIn = true;
//         }

//         return res.success;
//       });

//   }
  



  
  logout() {
    localStorage.removeItem('auth_token');
    this.loggedIn = false;
  }

  isLoggedIn() {
    return this.loggedIn;
  }
}