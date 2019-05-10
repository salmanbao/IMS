import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CertificateService {

  addBirthUrl = 'http://localhost:4000/channels/mychannel/chaincodes/birth';
  deleteBirthUrl = 'http://localhost:4000/channels/mychannel/chaincodes/birth:id';

  constructor(private http: HttpClient) { }
  add(info: any) {
    console.log("Service Data:",info);
    let peers = ["peer0.org1.example.com","peer1.org1.example.com"]
    info.peers = peers;
    return this.http.post(this.addBirthUrl,info);
  }
}
