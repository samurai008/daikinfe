import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../storage.service';

@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.css']
})
export class CompanyProfileComponent implements OnInit {
  userInfo;
  imageUrl = 'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX23315694.jpg';
  constructor(private storage: StorageService) {
    this.storage.checkAuthAndNavigateTo(['login'])
    .then(res => console.log('checkAuthAndNavigateTo :: ', res)
        , err => console.error(err));
  }

  ngOnInit() {
    this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
    this.imageUrl = 'http://inverterforafrica.com' + this.userInfo.logoUrl;
  }

  logout() {
    this.storage.logout()
    .then(res => console.log('LOGGED OUT', res))
    .catch(err => console.error('LOGOUT ERROR', err));
  }

}
