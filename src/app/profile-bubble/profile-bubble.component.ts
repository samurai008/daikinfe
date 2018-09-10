import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-profile-bubble',
  templateUrl: './profile-bubble.component.html',
  styleUrls: ['./profile-bubble.component.css']
})
export class ProfileBubbleComponent implements OnInit {
  userInfo;
  bubbleText = 'Login';
  @Input() cname;

  constructor(private storageService: StorageService) { }

  ngOnInit() {
    this.storageService.loggedInText.subscribe(cname => this.cname = cname);
  }

}
