import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../login-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StorageService } from '../storage.service';
import { LoadingService } from '../loading.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  asd = 'asda';
  loginError = false;

  fields = {
    'username': new FormControl('', Validators.required),
    'password': new FormControl('', Validators.required)
  };

  form = new FormGroup(this.fields);

  getUsername() {
    return this.form.get('username');
  }

  getPassword() {
    return this.form.get('password');
  }

  constructor(private loginService: LoginServiceService,
  private router: Router,
  private storageService: StorageService,
  private loadingService: LoadingService) { }

  ngOnInit() {
    //  check userInfo exits in storage
    if (this.storageService.checkStorageForUserInfo()) {
      console.log('this.storageService.checkStorageForUserInfo() = ', this.storageService.checkStorageForUserInfo());
      this.router.navigate(['customer-information'])
      .then(res => console.log(res))
      .catch(err => console.error(err));
    }
  }

  submit(form) {
    this.loadingService.display();
    this.loginService.doLogin(form.value)
    .subscribe((res) => {
      console.log(res);
      // store user info returned on successful login
      this.storageService.saveUserInfo(res);
      this.loadingService.dismiss();
      this.nagivateToCustFormComponent();
    }, (err) => {
      console.error(err);
      this.loginError = true;
      this.loadingService.dismiss();
    });
  }

  nagivateToCustFormComponent() {
    this.router.navigate(['customer-information'])
    .then((res) => console.log(res))
    .catch((err) => console.error(err));
  }

}
