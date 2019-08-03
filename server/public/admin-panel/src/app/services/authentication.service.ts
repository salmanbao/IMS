import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class AuthenticationService {

    constructor(private http: HttpClient) { }

    login(username: string, password: string, orgName: string) {
        return this.http.post<any>(`http://localhost:4000/login`, { username, password, orgName })
            .pipe(map(user => {
                console.log('Authentication service:', user);
                if (user && user.token) {
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    localStorage.setItem('profile', JSON.stringify({ username: username, orgName: orgName }));
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
