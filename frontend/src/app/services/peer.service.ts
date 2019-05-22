import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeerService {

  constructor(private http: HttpClient) { }
  baseUrl = 'http://localhost:4000/';
  channel: string = 'mychannel';

  getPeers(): Observable<any> {
    return this.http.get(this.baseUrl + 'peers/' + this.channel);
  }

  // tslint:disable-next-line: whitespace
  getOrderers(): Observable<any> {
    return this.http.get(this.baseUrl + 'orderer/' + this.channel);
  }

  joinChannel(peer: any): Observable<any> {
    return this.http.post(this.baseUrl + 'channels/' + this.channel + '/peers', peer);
  }
}
