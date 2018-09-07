import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.css']
})
export class CompanyProfileComponent implements OnInit {
  userInfo;
  imageUrl = 'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX23315694.jpg';
  constructor() { }

  ngOnInit() {
    this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
    this.imageUrl = 'http://inverterforafrica.com' + this.userInfo.logoUrl;
  }

}
