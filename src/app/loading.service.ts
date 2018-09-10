import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  public showLoader = new Subject();

  constructor() { }

  display() {
    this.showLoader.next(true);
  }

  dismiss() {
    this.showLoader.next(false);
  }
}
