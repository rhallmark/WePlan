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
let SignLocked = class SignLocked {
    constructor() {
        this.pwconf = false;
        this.login_text = "Submit";
        this.signup_text = "Sign Up";
    }
    login() {
        if (this.login_text === "Submit") {
            this.submit_login();
        }
        else {
            this.showLoginForm();
        }
    }
    submit_login() {
        //database stuff goes here
    }
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
    __metadata('design:paramtypes', [])
], SignLocked);
exports.SignLocked = SignLocked;
//# sourceMappingURL=wpSignLocked.component.js.map