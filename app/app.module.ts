import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppComponent }   from './app.component';
import { NavbarComponent } from './wpNavbar/wpNavbar.component';
import { MenuComponent }   from './menu/menu.component';
import { SignUpComponent } from './wpSignup/wpSignup.component';
import { SignInComponent } from './wpSignIn/wpSignIn.component';
import { FeedbackFormComponent } from './wpFeedback/wpFeedback.component';
import { HomeComponent } from './wpHome/wpHome.component';
import { AboutComponent } from './about/about.component';
import { SignLocked } from './wpSignLocked/wpSignLocked.component';
import {routeConfig} from './router-config';
import { EventsComponent } from './wpEvents/wpEvents.component';
import { NewEventComponent } from './wpNewEvent/wpNewEvent.component';

@NgModule({
  imports:      [ BrowserModule, CommonModule, RouterModule.forRoot(routeConfig), FormsModule],
  declarations: [ AppComponent, MenuComponent, SignUpComponent,
                  SignInComponent, FeedbackFormComponent, NavbarComponent,
                  HomeComponent, AboutComponent, SignLocked,
                  EventsComponent, NewEventComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { 


}
