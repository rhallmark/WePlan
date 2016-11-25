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
const event_1 = require('../event');
const router_1 = require('@angular/router');
const event_service_1 = require('../repositories/event.service');
let EditEventComponent = class EditEventComponent {
    constructor(route, //what does activatedRoute do?
        router, eventService) {
        this.route = route;
        this.router = router;
        this.eventService = eventService;
        this.submitted = false;
        // Event Options
        this.o_eventType = ["Other", "Weekly Meeting", "Interest Meeting", "Special Event", "Fundraising"];
        this.o_evntSize = ["Other", "Less than 25 People", "25 - 50 people", "Greater than 50 peoples"];
    }
    ngOnInit() {
        this.route.params.forEach((params) => {
            let id = +params['id'];
            let uid = +params['uid'];
            this.loadEvent(uid, id);
        });
    }
    loadEvent(uid, id) {
        if (!id) {
            this.title = 'New Event';
            // Create the Event such that blank properties are defined
            // title, year, imagepath
            this.eventTitle = "";
            this.orgName = "";
            this.eventType = "";
            this.date = "";
            this.time = "";
            this.info = "";
            this.uid = uid;
            // Now Create event
            this.l_event = new event_1.Event(this.eventTitle, this.orgName, this.eventType, this.date, this.time, this.info, uid);
            //this.id = this.event.id; //no id being given here is it taken care of internally? I know it will on real backend
            return;
        }
        else if (id) {
            // Need to grab an event by id. Inside promise set all variables
            this.eventService.getEvent(id).then((response) => {
                this.l_event = response;
                this.title = "Editing Event: " + this.l_event.eventTitle;
                this.eventTitle = this.l_event.eventTitle;
                this.orgName = this.l_event.orgName;
                this.eventType = this.l_event.eventType;
                this.date = this.l_event.date;
                this.time = this.l_event.time;
                this.info = this.l_event.info;
                this.id = this.l_event.id;
                this.uid = uid;
            });
        }
    }
    returnToList(message) {
        this.router.navigateByUrl(`events/${this.uid}`)
            .then(() => alert(message));
    }
    saveData() {
        this.l_event = new event_1.Event(this.eventTitle, this.orgName, this.eventType, this.date, this.time, this.info, this.uid, this.id);
        // If the event has an ID, update the event
        if (this.l_event.id) {
            this.eventService.update(this.l_event)
                .then(() => this.returnToList(`${this.l_event.eventTitle} has been updated!`));
        }
        else {
            //otherwise we need to assign it an id
            //NEED CODE TO ASSIGN EVENT ID
            this.id = 100;
            this.eventService.add(this.l_event)
                .then(() => this.returnToList(`${this.l_event.eventTitle} has been added!`));
        }
    }
    onSubmit() {
        this.submitted = true;
        console.log(this.orgName);
    }
    newEvent($event) {
        console.log($event);
    }
};
EditEventComponent = __decorate([
    core_1.Component({
        selector: 'wpEditEvent',
        templateUrl: 'app/wpEditEvent/wpEditEvent.html',
        styleUrls: ['app/wpEditEvent/wpEditEvent.css'],
    }), 
    __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, event_service_1.EventRepositoryService])
], EditEventComponent);
exports.EditEventComponent = EditEventComponent;
//# sourceMappingURL=wpEditEvent.component.js.map