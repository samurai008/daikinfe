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
  }

  ngOnInit() {
  }
}
