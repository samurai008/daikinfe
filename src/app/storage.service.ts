import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  public loggedInText = new Subject();

  constructor(private router: Router) {
  }

  checkStorageForUserInfo() {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    if (userInfo === null || userInfo === undefined) {
      return false;
    }
    return true;
  }

  saveUserInfo(data) {
    localStorage.setItem('userInfo', JSON.stringify(data));
    // Change 'login' to 'company-name' in profile bubble
    this.loggedInText.next(data['companyName']);
  }

  getUserInfo() {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    return userInfo === null ? false : userInfo;
  }

  logout() {
    localStorage.clear();
    this.loggedInText.next('Login');
    return this.router.navigate(['login']);
  }
}
