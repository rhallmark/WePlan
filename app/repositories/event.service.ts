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
	public getEvent(id : number) : Promise<any> {
		var pluck = (response) => (response && response.length) ? response[0] : undefined;
		return this.http.get(`${this._apiUrl}/?id=${id}`)
			.toPromise()
			.then((response) => pluck(response.json().data))
			.catch((response) => alert(response.json().error));
	}

	public add(event) : Promise<any> {
		//posting json data? how does this work as posting a event object?
		return this.http.post(this._apiUrl, event)
			.toPromise()
			.then(() => event) 
			.catch(response => alert(response.json().error));
	}

	public update(event) : Promise<any> {

		return this.http.put(`${this._apiUrl}/${event.id}`, event)
			.toPromise()
			.then(() => event)
			.catch(response => alert(response.json().error));
	}

	public delete(event) : Promise<void>{

		return this.http.delete(`${this._apiUrl}/${event.id}`,event)
		.toPromise()
		.catch(response => alert(response.json().error));
	}
}
