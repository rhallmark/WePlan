import { Component } from '@angular/core';
import { EventRepositoryService } from '../repositories/event.service';
import { CommonModule } from '@angular/common';
import { Event } from '../event';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'wpEvents',
  templateUrl: 'app/wpEvents/wpEvents.html',
  styleUrls: [ 'app/wpEvents/wpEvents.css' ],
})

export class EventsComponent { 
	title : string;
	allEvents : Event[] = [];
	events : Event[] = [];
	eventNumber : number;
	uid: number;

	constructor(private route: ActivatedRoute, //what does activatedRoute do?
              private router: Router,
			  private eventRepositoryService: EventRepositoryService){

		this.route.params.forEach( (params) => {
		this.uid = +params['uid'];
		});

		this.title = "My Events";
		//console.log(this.uid);


		eventRepositoryService.list().then(response => {
				this.allEvents = response;

				// Specifying which events to show
				// Tihs is not secure or effecient
				// This should be done with the backend
				// POC
				for (var test of this.allEvents) {
					if (test.uid == this.uid){
						//add to array of events
						this.events.push(test);
					}
				}

				this.eventNumber = this.events.length;
				//console.log(this.events);
		});


	}


	delete(l_event,index){

		this.eventRepositoryService.delete(l_event).then(() => {
			this.events.splice(index,1);
			this.eventNumber = this.eventNumber - 1;
			alert(`${l_event.eventTitle} was deleted!!`)
		});

	}


}
