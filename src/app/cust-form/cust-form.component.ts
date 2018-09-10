import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerDetailService } from '../customer-detail.service';
import { StorageService } from '../storage.service';
import { LoadingService } from '../loading.service';

@Component({
  selector: 'app-cust-form',
  templateUrl: './cust-form.component.html',
  styleUrls: ['./cust-form.component.css']
})
export class CustFormComponent implements OnInit {
  formSubmissionError = false;
  constructor(private router: Router, private customerDetailService: CustomerDetailService,
  private storageService: StorageService,
  private loadingService: LoadingService) {
    if (!this.storageService.checkStorageForUserInfo()) {
      this.router.navigate(['login'])
      .then(res => console.log('from ==> company-profile, no auth, redirect to login'),
      err => console.log(err));
    }
  }

  fields = {
    'country': new FormControl(),
    'name': new FormControl('', Validators.required),
    'phone': new FormControl('', Validators.required),
    'email': new FormControl('', Validators.required),
    'application': new FormControl(''),
  };

  get name() {
    return this.form.get('name');
  }
  get phone() {
    return this.form.get('phone');
  }
  get country() {
    return this.form.get('country');
  }
  get email() {
    return this.form.get('email');
  }
  get application() {
    return this.form.get('application');
  }

  form = new FormGroup(this.fields);

  ngOnInit() {
  }

  submit(form) {
    this.loadingService.display();
    console.log(form.value);
    this.customerDetailService.addCustomerDetails(form.value)
    .subscribe(res => {
      this.loadingService.dismiss();
      console.log(res);
    }, err => {
      this.formSubmissionError = true;
      this.loadingService.dismiss();
      console.error(err);
    });
    // this.router.navigate(['/result']);
  }

}
