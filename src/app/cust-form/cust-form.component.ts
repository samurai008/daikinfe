import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerDetailService } from '../customer-detail.service';

@Component({
  selector: 'app-cust-form',
  templateUrl: './cust-form.component.html',
  styleUrls: ['./cust-form.component.css']
})
export class CustFormComponent implements OnInit {

  constructor(private router: Router, private customerDetailService: CustomerDetailService) {
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
    console.log(form.value);
    this.customerDetailService.addCustomerDetails(form.value)
    .subscribe(res => console.log(res), err => console.error(err));
    // this.router.navigate(['/result']);
  }

}
