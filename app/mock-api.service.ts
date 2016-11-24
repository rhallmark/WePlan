import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable()
export class MockApiService implements InMemoryDbService {
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
        ]

        return {
            events,login
        };
    }
}