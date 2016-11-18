export class Event {

    eventId: number;
    eventName: string;
    orgName: string;
    type: string;
    date: string;
    time: string;
    size: string;
    additionalInfo: string;

    constructor(eventName:string, orgName:string, type:string, date:string, time:string, size:string, additionalInfo:string){ 
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

