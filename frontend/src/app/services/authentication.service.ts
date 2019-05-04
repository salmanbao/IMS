import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }
    loggedIn:boolean = false;
    login(username: string, orgName: string) {
        return this.http.post<any>(`http://localhost:4000/users`,{ username, orgName } )
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                console.log("Authentication service:",user);
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
                this.loggedIn = true;
                return user;
            }));
    }
 
    logout() {
        // remove user from local storage to log user out
        this.loggedIn  = false;
        localStorage.removeItem('currentUser');
    }
    isLogged(){
        return this.loggedIn;
    }
    
}
