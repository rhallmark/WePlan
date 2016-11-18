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
                eventName: "sunshine event",
                eventId: 1,
                orgName: "Org1",
                type: "fundraising",
                date: "August 8, 2016",
                size: "Greater than 50",
                additionalInfo: "This is the first test event for user 1"
            },
            {
                eventName: "Rockband!",
                eventId: 2,
                orgName: "org2",
                type: "awareness",
                date: "August 8, 2016",
                size: "Greater than 50",
                additionalInfo: "This is the first test event for user 1"
            },
            {
                eventName: "Bar Crawl",
                eventId: 3,
                orgName: "GUI Club",
                type: "Life Saving",
                date: "August 8, 2016",
                size: "Greater than 50",
                additionalInfo: "This is the first test event for user 1"
            }
        ];
        return {
            events
        };
    }
};
MockApiService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [])
], MockApiService);
exports.MockApiService = MockApiService;
//# sourceMappingURL=mock-api.service.js.map