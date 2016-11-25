"use strict";
const wpSignup_component_1 = require('./wpSignup/wpSignup.component');
const wpSignIn_component_1 = require('./wpSignIn/wpSignIn.component');
const about_component_1 = require('./about/about.component');
const wpSignLocked_component_1 = require('./wpSignLocked/wpSignLocked.component');
const wpEvents_component_1 = require('./wpEvents/wpEvents.component');
const wpEditEvent_component_1 = require('./wpEditEvent/wpEditEvent.component');
const indexRoute = {
    path: "",
    component: wpSignLocked_component_1.SignLocked
};
const fallbackRoute = {
    path: "**",
    component: wpSignLocked_component_1.SignLocked
};
exports.routeConfig = [
    indexRoute,
    {
        path: 'home',
        component: wpSignLocked_component_1.SignLocked //until we figure this out
    },
    {
        path: 'signin',
        component: wpSignIn_component_1.SignInComponent
    },
    {
        path: 'signup',
        component: wpSignup_component_1.SignUpComponent
    },
    {
        path: 'about',
        component: about_component_1.AboutComponent
    },
    {
        path: 'edit-event/:uid',
        redirectTo: 'events/:uid',
        pathMatch: 'full'
    },
    {
        path: 'events/:uid',
        component: wpEvents_component_1.EventsComponent
    },
    {
        path: 'edit-event/:uid/add',
        component: wpEditEvent_component_1.EditEventComponent
    },
    {
        path: 'edit-event/:uid/:id',
        component: wpEditEvent_component_1.EditEventComponent
    },
    fallbackRoute
];
//# sourceMappingURL=router-config.js.map