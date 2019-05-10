import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeerService {

  constructor(private http: HttpClient) { }
  channel : string = 'mychannel';
  addPeer(data:any){
    console.log("--------Peer Service--------------------");
    return this.http.post('http://localhost:4000/channels/'+this.channel+'/peers',data);
  }
}
