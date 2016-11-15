import { Component } from '@angular/core';

@Component({
  selector: 'wpEvents',
  templateUrl: 'app/wpEvents/wpEvents.html',
  styleUrls: [ 'app/wpEvents/wpEvents.css' ],
})

export class EventsComponent { 
	title : string;

	constructor(){
		this.title = "Events";
	}
}
