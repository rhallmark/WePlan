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
const core_1 = require('@angular/core');
const router_1 = require('@angular/router');
const http_1 = require('@angular/http');
const user_service_1 = require('../_services/user.service');
//import { contentHeaders } from '../common/headers';
let SignLocked = class SignLocked {
    constructor(userService, router, http) {
        this.userService = userService;
        this.router = router;
        this.http = http;
        this.pwconf = false;
        this.login_text = "Submit";
        this.signup_text = "Sign Up";
    }
    login(event, username, password) {
        if (this.login_text === "Submit") {
            this.submit_login(event, username, password);
        }
        else {
            this.showLoginForm();
        }
    }
    // Please note, I understand that this is neither effecient nor secure.
    // This is proof of concept because it was not covered in class.
    // There is ocnflicting documentation and opinions online.
    // I have a desire to finish the rest of the app, and this is the first idea that came to mind
    submit_login(event, username, password) {
        //database stuff goes here
        this.userService.login(username, password).then(response => {
            this.users = response;
            // Iterate through typescript array to find username
            // that matches username from db
            for (var item of this.users) {
                //console.log(username + '?' + item.username);
                if (username == item.username) {
                    //console.log(password + '?' + item.password);
                    if (password == item.password) {
                        console.log('succses!');
                        this.router.navigate([`events/${item.uid}`]);
                    }
                }
            }
            console.log('err');
        });
    }
    // submit_login(event, username, password) {
    //     //database stuff goes here
    //     this.userService.login(username, password).subscribe((result) => {
    //     if (result) {
    //         //this.router.navigate(['']);
    //         console.log('result');
    //     }
    //     });
    //     console.log(username);
    //     console.log(password);
    //     // event.preventDefault();
    //     // let body = JSON.stringify({ username, password });
    //     // this.http.post('http://localhost:3001/sessions/create', body, { headers: contentHeaders })
    //     // .subscribe(
    //     //     response => {
    //     //     localStorage.setItem('id_token', response.json().id_token);
    //     //     this.router.navigate(['home']);
    //     //     },
    //     //     error => {
    //     //     alert(error.text());
    //     //     console.log(error.text());
    //     //     }
    //     // );
    // }
    signup() {
        if (this.signup_text === "Submit") {
            this.submit_signup();
        }
        else {
            this.showSignUpForm();
        }
    }
    submit_signup() {
        //database stuff goes here
    }
    showLoginForm() {
        this.pwconf = false;
        this.login_text = "Submit";
        this.signup_text = "Sign Up";
    }
    showSignUpForm() {
        this.pwconf = true;
        this.login_text = "Login Form";
        this.signup_text = "Submit";
    }
};
SignLocked = __decorate([
    core_1.Component({
        selector: 'wpSL',
        templateUrl: 'app/wpSignLocked/wpSignLocked.html',
        styleUrls: ['app/wpSignLocked/wpSignLocked.css']
    }), 
    __metadata('design:paramtypes', [user_service_1.UserService, router_1.Router, http_1.Http])
], SignLocked);
exports.SignLocked = SignLocked;
//# sourceMappingURL=wpSignLocked.component.js.map