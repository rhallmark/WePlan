import { Component } from '@angular/core';
import { Event } from '../event';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EventRepositoryService } from '../repositories/event.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'wpEditEvent',
  templateUrl: 'app/wpEditEvent/wpEditEvent.html',
  styleUrls: [ 'app/wpEditEvent/wpEditEvent.css' ],
})

export class EditEventComponent { 
	title : string;
	submitted : boolean = false;

	// Event Params
	event: Event;
	eventTitle: string;
    orgName: string;
    eventType: string;
    date: string;
    time: string;
    info: string;
    eventID: number;

	constructor(private route: ActivatedRoute, //what does activatedRoute do?
              private router: Router,
              private eventService : EventRepositoryService){
		this.route.params.forEach( (params) => {
			let id = +params['id'];
			let uid = +params['uid'];
			this.loadEvent(uid,id);
		});		  
	}

  private loadEvent(uid,id){
 		if(!id) {
		this.title = 'New Event';
        // Create the Event such that blank properties are defined
        // title, year, imagepath
		this.eventTitle = "";
        this.orgName = "";
        this.eventType = "";
        this.date = "";
  		this.time = "";
		this.info = "";

		// Now Create event
		this.event = new Event(this.eventTitle, this.orgName, this.eventType, this.date, this.time, this.info, uid);
        this.eventID = this.event.eventID; //no id being given here is it taken care of internally? I know it will on real backend
		return;
		}
    else if(id) {
		

        // Need to grab an event by id. Inside promise set all variables
        this.eventService.getEvent(id).then( (response) => {
			this.event = response;
			console.log(this.event);
			this.title = "Edit Event:" + this.event.eventTitle;
			this.eventTitle = this.event.eventTitle;
			this.orgName = this.event.orgName;
			this.eventType = this.event.eventType;
			this.date = this.event.date;
			this.time = this.event.time;
			this.info = this.event.info;
          });
    }
  }





	onSubmit(){
		this.submitted = true;
		console.log(this.orgName);
	}


	newEvent($event){
		console.log($event);
	}



}
