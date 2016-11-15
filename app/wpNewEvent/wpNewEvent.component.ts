import { Component } from '@angular/core';

@Component({
  selector: 'wpNewEvent',
  templateUrl: 'app/wpNewEvent/wpNewEvent.html',
  styleUrls: [ 'app/wpNewEvent/wpNewEvent.css' ],
})

export class NewEventComponent { 
	title : string;

	constructor(){
		this.title = "New Event";
	}
}
