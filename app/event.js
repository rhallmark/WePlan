"use strict";
class Event {
    constructor(eventName, orgName, type, date, time, additionalInfo, uid, eventID) {
        //Need to obtain ID from DB
        this.eventTitle = eventName;
        this.orgName = orgName;
        this.eventType = type;
        this.date = date;
        this.time = time;
        this.info = additionalInfo;
        this.uid = uid;
        if (eventID) {
            this.eventID = eventID;
        }
        this.id = eventID;
    }
}
exports.Event = Event;
//# sourceMappingURL=event.js.map