import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private router: Router) {
  }

  checkAuthAndNavigateTo(args) {
    if (localStorage.getItem('userInfo') === undefined || !localStorage.getItem('userInfo')) {
      console.log('NAVIGATING TO ', args);
      return this.router.navigate(args);
    }

    return new Promise((resolve, reject) => {
      resolve('User logged in!');
    });
  }

  logout() {
    localStorage.clear();
    return this.router.navigate(['login']);
  }
}
