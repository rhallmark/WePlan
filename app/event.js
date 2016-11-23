"use strict";
class Event {
    constructor(eventName, orgName, type, date, time, size, additionalInfo, uid) {
        //Need to obtain ID from DB
        this.eventTitle = eventName;
        this.orgName = orgName;
        this.eventType = type;
        this.date = date;
        this.time = time;
        this.info = additionalInfo;
        this.uid = uid;
    }
}
exports.Event = Event;
//# sourceMappingURL=event.js.map