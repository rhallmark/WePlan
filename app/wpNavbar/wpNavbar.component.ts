import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wpNavbar',
  templateUrl: 'app/wpNavbar/wpNavbar.html',
  styleUrls: [ 'app/wpNavbar/wpNavbar.css' ]
})
export class NavbarComponent implements OnInit {
  public menuItems: any[];
  public brandMenu: any;
  isCollapsed = true;

  constructor() {}

  ngOnInit() {
    //this.menuItems = ROUTES.filter(menuItem => menuItem.menuType !== MenuType.BRAND);
    //this.brandMenu = ROUTES.filter(menuItem => menuItem.menuType === MenuType.BRAND)[0];
  }


}