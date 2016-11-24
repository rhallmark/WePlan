import { Injectable } from '@angular/core';
import { Event } from '../event';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class EventRepositoryService {

	private _apiUrl = 'app/events';

	constructor(private http: Http){

	}

	public list() : Promise<Event[]> {
		return this.http.get(this._apiUrl)
			.toPromise()
			.then(response => response.json().data as Event[]);
	}


	//This should get an Event based upon an id
	public getEvent(id : number) : Promise<Event> {
		var pluck = (response) => (response && response.length) ? response[0] : undefined;
		return this.http.get(`${this._apiUrl}/?eventID=${id}`)
			.toPromise()
			.then((response) => pluck(response.json().data))
			.catch((response) => alert(response.json().error));
	}

	public add(l_event) : Promise<any> {
		//posting json data? how does this work as posting a event object?
		return this.http.post(this._apiUrl, l_event)
			.toPromise()
			.then(() => l_event) 
			.catch(response => alert(response.json().error));
	}

	public update(l_event) : Promise<any> {
		console.log('in service');
		console.log(l_event);
		return this.http.put(`${this._apiUrl}/${l_event.eventID}`, l_event)
			.toPromise()
			.then(() => l_event)
			.catch(response => alert(response.json().error));
	}

	public delete(l_event) : Promise<void>{

		return this.http.delete(`${this._apiUrl}/${l_event.eventID}`,l_event)
		.toPromise()
		.catch(response => alert(response.json().error));
	}
}
