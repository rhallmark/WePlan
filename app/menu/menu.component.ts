import { Component } from '@angular/core';

import { MenuService } from './menu.service';

@Component({
  selector: 'menu',
  templateUrl: './app/menu/menu.html',
  styleUrls: [ './app/menu/menu.css' ],
  providers: [ MenuService ]
})

export class MenuComponent { 

	items: string[];

	constructor(menuService : MenuService) {
		this.items = menuService.getItems();
	}
}
