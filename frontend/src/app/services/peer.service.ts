import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeerService {

  constructor(private http: HttpClient) { }
  channel : string = 'mychannel';
  getPeers():Observable<any>{
    console.log("--------Peer Service--------------------");
    return this.http.get('http://localhost:4000/peers/'+this.channel);
  }
}
