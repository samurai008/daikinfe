import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  uri = 'http://inverterforafrica.com/apis/login';

  constructor(private http: HttpClient) { }

  doLogin(formData) {
    return this.http.post(this.uri, formData);
  }
}
