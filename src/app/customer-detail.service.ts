import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerDetailService {
  uri = 'http://inverterforafrica.com/add-customer';

  constructor(private http: HttpClient) { }

  addCustomerDetails(data) {
    return this.http.post(this.uri, data);
  }
}
