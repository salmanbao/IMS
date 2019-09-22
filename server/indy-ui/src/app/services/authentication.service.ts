import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class AuthenticationService {

    constructor(private http: HttpClient) { }

    login(username: string, password: string) {
        return this.http.post<any>(`/login`, { username, password })
            .pipe(map(user => {
                console.log('Authentication service:', user);
                if (user && user.token) {
                }
                return user;
            }));
    }
    logout() {
        localStorage.removeItem('currentUser');
    }
    isLogged() {
        if (localStorage.getItem('currentUser')) {
            return true;
        }
        return false;
    }
    getUser() {
        const user = JSON.parse(localStorage.getItem('profile'));
        return user;
    }

}
