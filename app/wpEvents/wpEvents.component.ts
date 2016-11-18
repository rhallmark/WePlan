import { Component } from '@angular/core';
import { EventRepositoryService } from '../repositories/event.service';
import { CommonModule } from '@angular/common';
import { Event } from '../event';

@Component({
  selector: 'wpEvents',
  templateUrl: 'app/wpEvents/wpEvents.html',
  styleUrls: [ 'app/wpEvents/wpEvents.css' ],
})

export class EventsComponent { 
	title : string;
	events : Event[];
	eventNumber : number;

	constructor(private eventRepositoryService: EventRepositoryService){
		this.title = "My Events";

		eventRepositoryService.list().then(response => {
				this.events = response;
				this.eventNumber = this.events.length;
				console.log(this.events);
		});

	}
}
