import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ChannelService {

  currentChannel: string;
  baseUrl = 'http://localhost:4000/';
  constructor(private http: HttpClient) { }
  setCurrentChannel(channel: string) {
    this.currentChannel = channel;
  }
  getCurrentChannel() {
    return this.currentChannel;
  }
  addChannel(data): Observable<any> {
    return this.http.post(this.baseUrl + 'channels', data);
  }
  getChannels(): Observable<any> {
    return this.http.get(this.baseUrl + 'channels/?peer=peer0.org1.example.com');
  }

  getChannelFiles(): Observable<any> {
    return this.http.get(this.baseUrl + 'channelfiles');
  }
}
