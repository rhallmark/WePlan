import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { UserService } from '../_services/user.service';
import { User } from '../_models/user';
//import { contentHeaders } from '../common/headers';

@Component({
    selector: 'wpSL',
    templateUrl: 'app/wpSignLocked/wpSignLocked.html',
    styleUrls: [ 'app/wpSignLocked/wpSignLocked.css' ]
})
export class SignLocked {

login_text: string;
signup_text: string;    
pwconf: boolean;
users: User[];

    constructor(private userService: UserService, public router: Router, public http: Http){
        this.pwconf = false;
        this.login_text = "Submit"
        this.signup_text = "Sign Up"
    }

    login(event, username, password) {
        if(this.login_text === "Submit"){
            this.submit_login(event, username, password);
        }
        else{
            this.showLoginForm();
        }
    }


// Please note, I understand that this is neither effecient nor secure.
// This is proof of concept because it was not covered in class.
// There is ocnflicting documentation and opinions online.
// I have a desire to finish the rest of the app, and this is the first idea that came to mind
    submit_login(event, username, password) {
        //database stuff goes here
        this.userService.login(username,password).then(response => {
            this.users = response;
            // Iterate through typescript array to find username
            // that matches username from db
            for (var item of this.users) {
                //console.log(username + '?' + item.username);
                if(username == item.username){
                    //console.log(password + '?' + item.password);
                    if(password == item.password){
                        //console.log('succses!');
                        this.router.navigate([`events/${item.uid}`]);
                    }
                }
            }
        //DISPLAY ERROR MESSAGE HERE FOR NO LOGIN
        //console.log('err');
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