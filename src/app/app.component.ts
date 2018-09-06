import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ResultComponent } from './result/result.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  @ViewChild(ResultComponent)
  expToChangeBckColor: ResultComponent;

  constructor(private element: ElementRef, private router: Router) {
    //  check userInfo exits in storage
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    if (userInfo && userInfo !== undefined) {
      this.router.navigate(['customer-information'])
      .then(res => console.log(res))
      .catch(err => console.error(err));
    }
  }

  ngOnInit() {
  }
}
