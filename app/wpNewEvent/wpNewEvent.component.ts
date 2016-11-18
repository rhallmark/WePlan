import { Component } from '@angular/core';
import { Event } from '../event'

@Component({
  selector: 'wpNewEvent',
  templateUrl: 'app/wpNewEvent/wpNewEvent.html',
  styleUrls: [ 'app/wpNewEvent/wpNewEvent.css' ],
})

export class NewEventComponent { 
	title : string;
	submitted : boolean = false;
    eventId: number;
    orgName: string;
    type: string;
    date: string;
    time: string;
    size: string;
    additionalInfo: string;

	constructor(){
		//if theres an id, make it event edit


		//if no id, make it new event
		this.title = "New Event";
	}

	onSubmit(){
		this.submitted = true;
		console.log(this.orgName);
	}


	newEvent($event){
		console.log($event);
	}



}
