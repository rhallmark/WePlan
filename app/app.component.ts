import { Component } from '@angular/core';

@Component({
  selector: 'app',
  templateUrl: './app/app.html',
  styleUrls: [ './app/app.css' ],
})

export class AppComponent { 
	title : string;
	id_attribute: string;

	constructor(){
		this.title = "WePlan";
		this.id_attribute = "";
	}
}
