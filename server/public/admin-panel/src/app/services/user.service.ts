import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'app/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = 'http://localhost:4000/'
  constructor(private http: HttpClient) { }

  register(user: User) {
    return this.http.post(this.baseUrl + 'register', user);
  }
  getAllUsers() {
    return this.http.get(this.baseUrl + 'getAllUsers');
  }
  getAdminCert() {
    return this.http.get(this.baseUrl + 'getAdminCert')
  }
  revokeUser(user) {
    return this.http.post(this.baseUrl + 'revoke', user);
  }
  enrollUser(user) {
    return this.http.post(this.baseUrl + 'reenroll', user);
  }

  removeUser(user) {
    return this.http.post(this.baseUrl + 'delete', user);
  }
}
