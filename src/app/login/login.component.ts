import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../login-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

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
  private router: Router) { }

  ngOnInit() {
    //  check userInfo exits in storage
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    if (userInfo !== null && userInfo !== undefined) {
      this.router.navigate(['customer-information'])
      .then(res => console.log(res))
      .catch(err => console.error(err));
    }
  }

  submit(form) {
    this.loginService.doLogin(form.value)
    .subscribe((res) => {
      console.log(res);
      // store user info returned on successful login
      localStorage.setItem('userInfo', JSON.stringify(res));
      this.nagivateToCustFormComponent();
    }, (err) => {
      console.error(err);
      // this.nagivateToCustFormComponent();
    });
  }

  nagivateToCustFormComponent() {
    this.router.navigate(['customer-information'])
    .then((res) => console.log(res))
    .catch((err) => console.error(err));
  }

}
