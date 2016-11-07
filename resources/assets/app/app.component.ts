import { Component } from '@angular/core';

@Component({
  selector: 'app',
  templateUrl: './app/app.html',
  styleUrls: [ './css/app.css' ],
})

export class AppComponent { 
	title : string;

	constructor(){
		this.title = "Hello World";
	}
}
