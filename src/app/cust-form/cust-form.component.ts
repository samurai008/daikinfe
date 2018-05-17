import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cust-form',
  templateUrl: './cust-form.component.html',
  styleUrls: ['./cust-form.component.css']
})
export class CustFormComponent implements OnInit {

  constructor(private router: Router) { }

  fields = {
    'country': new FormControl(),
    'name': new FormControl('', Validators.required),
    'phone': new FormControl('', Validators.required),
    'email': new FormControl('', Validators.required),
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

  form = new FormGroup(this.fields);

  ngOnInit() {
  }

  submit(form) {
    console.log(form.value);
    this.router.navigate(['/result']);
  }

}
