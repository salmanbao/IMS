import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CertificateService {

  constructor(private http: HttpClient) { }
  add(info: any) {
    console.log("Service Data:",info);
    let peers = ["peer0.org1.example.com","peer1.org1.example.com"]
    
    return this.http.post('http://localhost:4000/channels/mychannel/chaincodes/birth',info);
  }
}
