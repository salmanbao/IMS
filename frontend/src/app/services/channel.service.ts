import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ChannelService {

  constructor(private http: HttpClient) { }
  add(data: any) {
    console.log("Service Data:",data);  
    return this.http.post('http://localhost:4000/channels',data);
  }

  getChannelFiles(): Observable<any>{
    console.log("--------Getting Data in Service--------------------");
    return this.http.get('http://localhost:4000/channelfiles');
  }
}
