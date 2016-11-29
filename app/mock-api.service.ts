import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable()
export class MockApiService implements InMemoryDbService {
    createDb() {

        let events = [
            {
                id: 1,
                eventTitle: "Sunshine Event",
                orgName: "Org1",
                eventType: "fundraising",
                date: "January 1, 2017",
                time: "12:00 AM",
                info: "This is the first test event for user 1",
                foodType: "",
                bld: "",
                location: "",
                setting: "",
                checkboxes: "",
                uid: 2
            },
            {
                id: 2,
                eventTitle: "Rockband!",
                orgName: "org2",
                eventType: "awareness",
                date: "December 5, 2016",
                time: "12:00 PM",
                info: "Rock Out!",
                foodType: "",
                bld: "",
                location: "",
                setting: "",
                checkboxes: "",
                uid: 2
            },
            {
                id: 3,
                eventTitle: "Bar Crawl",
                orgName: "GUI Club",
                eventType: "Life Saving",
                date: "November 29, 2016",
                time: "12:53 PM",
                info: "We're going to need this when this class is finished",
                foodType: "",
                bld: "",
                location: "",
                setting: "",
                checkboxes: "",
                uid: 2
            },
            {
                id: 4,
                eventTitle: "Test Event",
                orgName: "test org",
                eventType: "awareness",
                date: "August 8, 2016",
                time: "12:53 PM",
                info: "This Event is a test",
                foodType: "",
                bld: "",
                location: "",
                setting: "",
                checkboxes: "",
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
        ]

        return {
            events,login
        };
    }
}