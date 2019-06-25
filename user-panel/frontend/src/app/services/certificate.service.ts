import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CertificateService {
  addBirthUrl = 'http://localhost:8080/birth/add';
  addMarriageUrl = 'http://localhost:8080/marriage/add';
  addNationalIDUrl = 'http://localhost:8080/nationalid/add';
  constructor(private http: HttpClient) { }
  addBirth(cert: any) {
    return this.http.post(this.addBirthUrl, cert);
  }
  addNationalID(cert: any) {
    return this.http.post(this.addNationalIDUrl, cert);
  }
  addMarriage(cert: any) {
    return this.http.post(this.addMarriageUrl, cert);
  }
}
