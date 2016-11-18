"use strict";
class Event {
    constructor(eventName, orgName, type, date, time, size, additionalInfo) {
        //Need to obtain ID from DB
        this.eventName = eventName;
        this.orgName = orgName;
        this.type = type;
        this.date = date;
        this.time = time;
        this.size = size;
        this.additionalInfo = additionalInfo;
    }
}
exports.Event = Event;
//# sourceMappingURL=event.js.map