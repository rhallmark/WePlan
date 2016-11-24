"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// user.service.ts
const core_1 = require('@angular/core');
const http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
require('rxjs/Rx');
let UserService = class UserService {
    constructor(http) {
        this.http = http;
        this.loggedIn = false;
        this._apiUrl = "app/login";
        this.loggedIn = !!localStorage.getItem('auth_token');
    }
    login(username, password) {
        let headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        console.log('posting data now');
        return this.http.get(this._apiUrl)
            .toPromise()
            .then(response => response.json().data);
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
};
UserService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [http_1.Http])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map