import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-profile-bubble',
  templateUrl: './profile-bubble.component.html',
  styleUrls: ['./profile-bubble.component.css']
})
export class ProfileBubbleComponent implements OnInit {
  userInfo;
  bubbleText = 'Login';
  @ViewChild('bubble') bubbleEl;

  constructor() { }

  ngOnInit() {
    this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
    if (this.userInfo !== undefined) {
      console.log(this.userInfo);
      this.bubbleText = this.userInfo['companyName'];
      console.log(this.bubbleEl.nativeElement.style);
      this.bubbleEl.nativeElement.style['backgroundImage'] = 'http://inverterforafrica.com' + this.userInfo['logoUrl'];
      this.bubbleEl.nativeElement.style['backgroundPosition'] = 'center';
    }
  }

}
