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
let MockApiService = class MockApiService {
    createDb() {
        let events = [
            {
                eventTitle: "sunshine event",
                orgName: "Org1",
                eventType: "fundraising",
                date: "August 8, 2016",
                time: "12:53 PM",
                info: "This is the first test event for user 1",
                eventID: 1,
                uid: 1
            },
            {
                eventTitle: "Rockband!",
                orgName: "org2",
                eventType: "awareness",
                date: "August 8, 2016",
                time: "12:53 PM",
                info: "This is the first test event for user 1",
                eventID: 2,
                uid: 2
            },
            {
                eventTitle: "Bar Crawl",
                orgName: "GUI Club",
                eventType: "Life Saving",
                date: "August 8, 2016",
                time: "12:53 PM",
                info: "This is the first test event for user 1",
                eventID: 3,
                uid: 1
            }
        ];
        let login = [
            {
                username: "Russ",
                password: "123",
                uid: 1
            },
            {
                username: "Bob",
                password: "pass",
                uid: 2
            }
        ];
        return {
            events, login
        };
    }
};
MockApiService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [])
], MockApiService);
exports.MockApiService = MockApiService;
//# sourceMappingURL=mock-api.service.js.map