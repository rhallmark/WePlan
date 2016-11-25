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

	// Event Options
	o_eventType: string[] = ["Other", "Weekly Meeting", "Interest Meeting", "Special Event", "Fundraising"];
	o_evntSize: string[] = ["Other", "Less than 25 People", "25 - 50 people", "Greater than 50 peoples"];

	// Event Params
	l_event: Event;
	eventTitle: string;
    orgName: string;
    eventType: string;
    date: string;
    time: string;
    info: string;
    id: number;
	uid: number;

	constructor(private route: ActivatedRoute, //what does activatedRoute do?
              private router: Router,
              private eventService : EventRepositoryService){}

	ngOnInit() {
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
			this.uid = uid;
			// Now Create event
			this.l_event = new Event(this.eventTitle, this.orgName, this.eventType, this.date, this.time, this.info, uid);
			//this.id = this.event.id; //no id being given here is it taken care of internally? I know it will on real backend
			return;
		}
    else if(id) {
		// Need to grab an event by id. Inside promise set all variables
        this.eventService.getEvent(id).then( (response) => {
			this.l_event = response;

			this.title = "Editing Event: " + this.l_event.eventTitle;
			this.eventTitle = this.l_event.eventTitle;
			this.orgName = this.l_event.orgName;
			this.eventType = this.l_event.eventType;
			this.date = this.l_event.date;
			this.time = this.l_event.time;
			this.info = this.l_event.info;
			this.id = this.l_event.id;
			this.uid = uid;
          });
    }
  }


	private returnToList(message){
		this.router.navigateByUrl(`events/${this.uid}`)
			.then(() => alert(message));
	}


  	saveData(){

		  this.l_event = new Event(this.eventTitle, this.orgName, this.eventType, this.date, this.time, this.info, this.uid, this.id );


		  // If the event has an ID, update the event
		  if(this.l_event.id){

			  this.eventService.update(this.l_event)
			  	.then(() => this.returnToList(`${this.l_event.eventTitle} has been updated!`))
		  }
		  else{
			  //otherwise we need to assign it an id
			  //NEED CODE TO ASSIGN EVENT ID
			  this.id = 100;
			  this.eventService.add(this.l_event)
			  	.then(() => this.returnToList(`${this.l_event.eventTitle} has been added!`))
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
