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
const platform_browser_1 = require('@angular/platform-browser');
const forms_1 = require('@angular/forms');
const router_1 = require('@angular/router');
const common_1 = require('@angular/common');
const http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
const app_component_1 = require('./app.component');
const wpNavbar_component_1 = require('./wpNavbar/wpNavbar.component');
const menu_component_1 = require('./menu/menu.component');
const wpSignup_component_1 = require('./wpSignup/wpSignup.component');
const wpSignIn_component_1 = require('./wpSignIn/wpSignIn.component');
const wpFeedback_component_1 = require('./wpFeedback/wpFeedback.component');
const wpHome_component_1 = require('./wpHome/wpHome.component');
const about_component_1 = require('./about/about.component');
const wpSignLocked_component_1 = require('./wpSignLocked/wpSignLocked.component');
const wpEvents_component_1 = require('./wpEvents/wpEvents.component');
const wpNewEvent_component_1 = require('./wpNewEvent/wpNewEvent.component');
const event_service_1 = require('./repositories/event.service');
const user_service_1 = require('./_services/user.service');
const angular_in_memory_web_api_1 = require('angular-in-memory-web-api');
const mock_api_service_1 = require('./mock-api.service');
const router_config_1 = require('./router-config');
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule,
            common_1.CommonModule,
            router_1.RouterModule.forRoot(router_config_1.routeConfig),
            forms_1.FormsModule,
            http_1.HttpModule,
            angular_in_memory_web_api_1.InMemoryWebApiModule.forRoot(mock_api_service_1.MockApiService)
        ],
        declarations: [app_component_1.AppComponent,
            menu_component_1.MenuComponent,
            wpSignup_component_1.SignUpComponent,
            wpSignIn_component_1.SignInComponent,
            wpFeedback_component_1.FeedbackFormComponent,
            wpNavbar_component_1.NavbarComponent,
            wpHome_component_1.HomeComponent,
            about_component_1.AboutComponent,
            wpSignLocked_component_1.SignLocked,
            wpEvents_component_1.EventsComponent,
            wpNewEvent_component_1.NewEventComponent
        ],
        providers: [event_service_1.EventRepositoryService,
            user_service_1.UserService
        ],
        bootstrap: [app_component_1.AppComponent]
    }), 
    __metadata('design:paramtypes', [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map