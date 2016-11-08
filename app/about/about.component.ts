import { Component } from '@angular/core';

@Component({
  selector: 'about',
  templateUrl: 'app/about/about.html',
  styleUrls: [ 'app/about/about.css' ],
})

export class AboutComponent { 
	title : string;

	constructor(){
		this.title = "About wePlan Events";
	}
}
