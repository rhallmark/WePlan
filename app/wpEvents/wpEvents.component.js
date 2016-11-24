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
const event_service_1 = require('../repositories/event.service');
const router_1 = require('@angular/router');
let EventsComponent = class EventsComponent {
    constructor(route, //what does activatedRoute do?
        router, eventRepositoryService) {
        this.route = route;
        this.router = router;
        this.eventRepositoryService = eventRepositoryService;
        this.allEvents = [];
        this.events = [];
        this.route.params.forEach((params) => {
            this.uid = +params['uid'];
        });
        this.title = "My Events";
        //console.log(this.uid);
        eventRepositoryService.list().then(response => {
            console.log(response);
            this.allEvents = response;
            // Specifying which events to show
            // Tihs is not secure or effecient
            // This should be done with the backend
            // POC
            for (var test of this.allEvents) {
                if (test.uid == this.uid) {
                    //add to array of events
                    this.events.push(test);
                }
            }
            this.eventNumber = this.events.length;
            //console.log(this.events);
        });
    }
    ngOnInit() {
        //moved params to constructor
    }
};
EventsComponent = __decorate([
    core_1.Component({
        selector: 'wpEvents',
        templateUrl: 'app/wpEvents/wpEvents.html',
        styleUrls: ['app/wpEvents/wpEvents.css'],
    }), 
    __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, event_service_1.EventRepositoryService])
], EventsComponent);
exports.EventsComponent = EventsComponent;
//# sourceMappingURL=wpEvents.component.js.map