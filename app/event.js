"use strict";
class Event {
    constructor(eventName, orgName, type, date, time, additionalInfo, uid, id) {
        //Need to obtain ID from DB
        this.eventTitle = eventName;
        this.orgName = orgName;
        this.eventType = type;
        this.date = date;
        this.time = time;
        this.info = additionalInfo;
        this.uid = uid;
        if (id) {
            this.eventID = id;
        }
    }
}
exports.Event = Event;
//# sourceMappingURL=event.js.map