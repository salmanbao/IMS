import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChaincodeService {

  constructor(private http: HttpClient) { }
  getChaincodeFiles(): Observable<any>{
    console.log("--------Getting Data in Service--------------------");
    return this.http.get('http://localhost:4000/chaincodefiles');
  }
}
