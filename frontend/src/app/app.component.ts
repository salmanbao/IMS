import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
constructor(private auth: AuthenticationService){}
// tslint:disable-next-line: member-ordering
isAuth: boolean = this.auth.isLogged();
ngOnInit(){
  console.log(this.isAuth);
}
}
