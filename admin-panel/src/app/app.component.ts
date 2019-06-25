import { Component, AfterViewChecked, ChangeDetectorRef } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewChecked {
  islogged;
  constructor(
    private auth: AuthenticationService,
    private cdRef: ChangeDetectorRef
  ) { }
  ngAfterViewChecked() {
    this.cdRef.detectChanges();
  }
}
