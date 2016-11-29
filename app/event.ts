export class Event {

    eventTitle: string;
    orgName: string;
    eventType: string;
    date: string;
    time: string;
    info: string;
    uid: number;
    id:number ;

    // Food
    foodType: string;
    bld: string;

    // Venue
    eventSize: string;
    setting: string;
    location: string;

    // equipment info
    checkboxes: any[];

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

