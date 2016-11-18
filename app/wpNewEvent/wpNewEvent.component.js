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
let NewEventComponent = class NewEventComponent {
    constructor() {
        //if theres an id, make it event edit
        this.submitted = false;
        this.orgName = "byebye";
        //if no id, make it new event
        this.title = "New Event";
    }
    onSubmit() {
        this.submitted = true;
        console.log(this.orgName);
    }
    newEvent($event) {
        console.log($event);
    }
};
NewEventComponent = __decorate([
    core_1.Component({
        selector: 'wpNewEvent',
        templateUrl: 'app/wpNewEvent/wpNewEvent.html',
        styleUrls: ['app/wpNewEvent/wpNewEvent.css'],
    }), 
    __metadata('design:paramtypes', [])
], NewEventComponent);
exports.NewEventComponent = NewEventComponent;
//# sourceMappingURL=wpNewEvent.component.js.map