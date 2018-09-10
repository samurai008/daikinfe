import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ResultComponent } from './result/result.component';
import { Router } from '@angular/router';
import { StorageService } from './storage.service';
import { LoadingService } from './loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  @ViewChild(ResultComponent)
  expToChangeBckColor: ResultComponent;
  cname = 'Login';
  showLoader: any = false;

  constructor(private element: ElementRef, private router: Router,
  private loadingService: LoadingService) {}

  ngOnInit() {
    this.loadingService.showLoader
    .subscribe(res => {
      this.showLoader = res;
    });
  }
}
