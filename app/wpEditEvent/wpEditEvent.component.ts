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

	// Buttons 
	//buttons: string[] = ["info","venue","food","rent"];
	display: string = "info";
	not_selected: string =  "btn btn-primary";
	selected: string = "btn btn-info";
	//current_btn: string = "info";
	info_btn: string = this.selected;
	venue_btn: string = this.not_selected;
	food_btn: string = this.not_selected;
	rent_btn: string = this.not_selected;

	// Event Options
	o_eventType: string[] = ["Other", "Weekly Meeting", "Interest Meeting", "Special Event", "Fundraising"];
	o_foodType: string[] = ["Mexican", "Italian", "Asian", "American"];
	o_bld: string[] = ["Breakfast", "Lunch", "Dinner"];
	o_evntSize: string[] = ["Other", "Less than 25 People", "25 - 50 people", "Greater than 50 peoples"];

	// Event Params
	l_event: Event;
	l_eventTitle: string;
    l_orgName: string;
    l_eventType: string;
    l_date: string;
    l_time: string;
    l_info: string;
    id: number;
	l_uid: number;

	// Food params
	l_foodType: string;
	l_bld: string;

	constructor(private route: ActivatedRoute, //what does activatedRoute do?
              private router: Router,
              private eventService : EventRepositoryService){

			  }

	ngOnInit() {
		this.route.params.forEach( (params) => {
		let id = +params['id'];
		let uid = +params['uid'];
		this.loadEvent(uid,id);
		});
	}

	changeDisplay(display: string){
		
		this.display = display;

		if(this.display === 'info'){
			this.info_btn = this.selected;
			this.venue_btn = this.not_selected;
			this.food_btn = this.not_selected;
			this.rent_btn = this.not_selected;
		}
		else if(this.display === 'venue'){
			this.info_btn = this.not_selected;
			this.venue_btn = this.selected;
			this.food_btn = this.not_selected;
			this.rent_btn = this.not_selected;
		}
		else if(this.display === 'food'){
			this.info_btn = this.not_selected;
			this.venue_btn = this.not_selected;
			this.food_btn = this.selected;
			this.rent_btn = this.not_selected;
		}
		else if(this.display === 'rent'){
			this.info_btn = this.not_selected;
			this.venue_btn = this.not_selected;
			this.food_btn = this.not_selected;
			this.rent_btn = this.selected;
		}
		else{
			console.log("You shouldn't be here..");
		}
	}

	next(){
		if(this.display === "info"){
			this.display = "venue";
			this.changeDisplay("venue");
		}
		else if(this.display === "venue"){
			this.display = "food";
			this.changeDisplay("food");
		}
		else if(this.display === "food"){
			this.display = "rent";
			this.changeDisplay("rent");
		}
		else if(this.display === "rent"){
			this.display = "info";
			this.changeDisplay("info");
		}
		else{
			console.log("You shouldn't be here..");
		}
	}

	back(){
		if(this.display === "info"){
			this.display = "rent";
			this.changeDisplay("rent");
		}
		else if(this.display === "venue"){
			this.display = "info";
			this.changeDisplay("info");
		}
		else if(this.display === "food"){
			this.display = "venue";
			this.changeDisplay("venue");
		}
		else if(this.display === "rent"){
			this.display = "food";
			this.changeDisplay("food");
		}
		else{
			console.log("You shouldn't be here..");
		}
	}


	private loadEvent(uid,id){
			if(!id) {

				this.title = 'New Event';
				// Create the Event such that blank properties are defined
				// title, year, imagepath
				this.l_eventTitle = "";
				this.l_orgName = "";
				this.l_eventType = "";
				this.l_date = "";
				this.l_time = "";
				this.l_info = "";

				// Set food info
				this.l_foodType = "";
				this.l_bld = "";

				this.l_uid = uid;
				// Now Create event
				this.l_event = new Event(this.l_eventTitle, this.l_orgName, this.l_eventType, this.l_date, this.l_time, this.l_info, uid);
				this.id = this.l_event.id; //no id being given here is it taken care of internally? I know it will on real backend
				return;
			}
		else if(id) {
			// Need to grab an event by id. Inside promise set all variables
			this.eventService.getEvent(id).then( (response) => {
				this.l_event = response;

				this.title = "Editing Event: " + this.l_event.eventTitle;
				this.l_eventTitle = this.l_event.eventTitle;
				this.l_orgName = this.l_event.orgName;
				this.l_eventType = this.l_event.eventType;
				this.l_date = this.l_event.date;
				this.l_time = this.l_event.time;
				this.l_info = this.l_event.info;
				this.id = this.l_event.id;

				// get food info
				this.l_foodType = this.l_event.foodType;
				this.l_bld = this.l_event.bld;

				this.l_uid = uid;
			});
		}
	}


	private returnToList(message){
		this.router.navigateByUrl(`events/${this.l_uid}`)
			.then(() => alert(message));
	}


  	saveData(){

		  this.l_event = new Event(this.l_eventTitle, this.l_orgName, this.l_eventType, this.l_date, this.l_time, this.l_info, this.l_uid, this.id );

		  // Update food info upon save
		  this.l_event.foodType = this.l_foodType;
		  this.l_event.bld = this.l_bld;

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
		console.log(this.l_orgName);
	}


	newEvent($event){
		console.log($event);
	}



}
