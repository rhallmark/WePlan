export class Event {

    eventTitle: string;
    orgName: string;
    eventType: string;
    date: string;
    time: string;
    info: string;
    eventID: number;

    constructor(eventName:string, orgName:string, type:string, date:string, time:string, size:string, additionalInfo:string){ 
        //Need to obtain ID from DB
        this.eventTitle = eventName;
        this.orgName = orgName;
        this.eventType = type;
        this.date = date;
        this.time = time
        this.info = additionalInfo;
    }


}

