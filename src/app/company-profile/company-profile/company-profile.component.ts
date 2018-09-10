import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.css']
})
export class CompanyProfileComponent implements OnInit {
  userInfo;
  imageUrl = 'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX23315694.jpg';
  constructor(private storageService: StorageService, private router: Router) {
    // check if user if logged in else redirect to login
    if (!this.storageService.checkStorageForUserInfo()) {
      this.router.navigate(['login'])
      .then(res => console.log('from ==> company-profile, no auth, redirect to login'),
      err => console.log(err));
    }
  }

  ngOnInit() {
    this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
    this.imageUrl = 'http://inverterforafrica.com' + this.userInfo.logoUrl;
  }

  logout() {
    this.storageService.logout()
    .then(res => console.log('LOGGED OUT', res))
    .catch(err => console.error('LOGOUT ERROR', err));
  }

}
