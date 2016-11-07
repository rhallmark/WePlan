import { Injectable } from '@angular/core';

@Injectable()
export class MenuService { 
	getItems() : string[] {
		return ["One", "Two", "Three"];
	}
}