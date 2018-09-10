import { Component, OnInit } from '@angular/core';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  cname = 'Login';
  navItems = [
    {
      title: 'Home',
      link: '/customer-information',
      icon: 'fa fa-home'
    },
    {
      title: 'Plan',
      link: '#',
      icon: 'fa fa-book'
    },
    {
      title: 'Daikin Africa',
      link: '#',
      icon: 'fa fa-globe'
    },
    {
      title: 'About Inverter',
      link: '#',
      icon: 'fa fa-question'
    }
  ];

  constructor(private storageService: StorageService) {
    if (this.storageService.checkStorageForUserInfo()) {
      this.cname = storageService.getUserInfo()['companyName'];
    }
  }
  mobMenu = false;

  ngOnInit() {
  }

  toggleMenu() {
    this.mobMenu = !this.mobMenu;
  }

}
