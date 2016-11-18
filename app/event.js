"use strict";
class Event {
    constructor(eventName, orgName, type, date, time, size, additionalInfo) {
        //Need to obtain ID from DB
        this.eventTitle = eventName;
        this.orgName = orgName;
        this.eventType = type;
        this.date = date;
        this.time = time;
        this.info = additionalInfo;
    }
}
exports.Event = Event;
//# sourceMappingURL=event.js.map