export class Event {

    eventTitle: string;
    orgName: string;
    eventType: string;
    date: string;
    time: string;
    info: string;
    uid: number;
    id:number ;

    constructor(eventName:string, orgName:string, type:string, date:string, time:string, additionalInfo:string, uid:number, id?:number){ 
        //Need to obtain ID from DB
        this.eventTitle = eventName;
        this.orgName = orgName;
        this.eventType = type;
        this.date = date;
        this.time = time
        this.info = additionalInfo;
        this.uid = uid;
        if(id){
            this.id = id;
        }

    }


}

