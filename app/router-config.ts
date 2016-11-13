import {Route} from "@angular/router";

// Components
import { AppComponent }   from './app.component';
import { NavbarComponent } from './wpNavbar/wpNavbar.component';
import { MenuComponent }   from './menu/menu.component';
import { SignUpComponent } from './wpSignup/wpSignup.component';
import { SignInComponent } from './wpSignIn/wpSignIn.component';
import { FeedbackFormComponent } from './wpFeedback/wpFeedback.component';
import { HomeComponent } from './wpHome/wpHome.component';
import { AboutComponent } from './about/about.component';
import { SignLocked } from './wpSignLocked/wpSignLocked.component';

const indexRoute: Route = {
    path: "",
    component: SignLocked
}

const fallbackRoute: Route = {
    path: "**",
    component: SignLocked
}

export const routeConfig: Route[] = [
    indexRoute,
    {
        path: 'home',
        component: SignLocked //until we figure this out
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'sl',
        component: SignLocked
    },
    fallbackRoute
];