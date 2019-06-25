import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { tokenNotExpired } from 'angular2-jwt';
@Injectable({
    providedIn: 'root'
})

export class AuthenticationService {
    baseUrl = 'http://localhost:8080/';
    authToken: any;
    user: any;

    constructor(private http: HttpClient) { }

    registerUser(user) {
        return this.http.post(this.baseUrl + 'users/register', user)
    }

    authenticateUser(user) {
        return this.http.post(this.baseUrl + 'users/authenticate', user)
    }

    getProfile() {
        return this.http.get(this.baseUrl  + 'users/profile')
    }

    storeUserData(token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    }

    loadToken() {
        const token = localStorage.getItem('id_token');
        this.authToken = token;
    }

    loggedIn() {
        return tokenNotExpired('id_token');
    }

    logout() {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    }
    getUser(){
        let username = JSON.parse(localStorage.getItem('user'));
        return username.username;
    }
}
