import { Component } from '@angular/core';

@Component({
    selector: 'wpSL',
    templateUrl: 'app/wpSignLocked/wpSignLocked.html',
    styleUrls: [ 'app/wpSignLocked/wpSignLocked.css' ]
})
export class SignLocked {

login_text: string;
signup_text: string;    
pwconf: boolean;

    constructor(){
        this.pwconf = false;
        this.login_text = "Submit"
        this.signup_text = "Sign Up"
    }

    login() {
        if(this.login_text === "Submit"){
            this.submit_login();
        }
        else{
            this.showLoginForm();
        }
    }

    submit_login() {
        //database stuff goes here
    }

    signup() {
        if(this.signup_text === "Submit"){
            this.submit_signup();
        }
        else{
            this.showSignUpForm();
        }
    }

    submit_signup() {
        //database stuff goes here
    }

    showLoginForm() {
        this.pwconf = false;
        this.login_text = "Submit"
        this.signup_text = "Sign Up"
    }

    showSignUpForm() {
        this.pwconf = true;
        this.login_text = "Login Form"
        this.signup_text = "Submit"
    }

}