import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable()
export class MockApiService implements InMemoryDbService {
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
}