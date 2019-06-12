import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CertificateService {

  addBirthUrl = 'http://localhost:4000/channels/mychannel/chaincodes/birth';
  deleteBirthUrl = 'http://localhost:4000/channels/mychannel/chaincodes/birth:id';
  BirthCertificates = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }
  add(info: any) {
    let peers = ["peer0.org1.example.com", "peer1.org1.example.com"]
    info.peers = peers;
    return this.http.post(this.addBirthUrl, info);
  }

  getAll(): Observable<any> {
    return this.http.get(this.BirthCertificates + 'birth/getall');
  }
  rejectBirthRequest(username): Observable<any> {
    return this.http.post(this.BirthCertificates + 'birth/reject', username);
  }
  approveBirthRequest(username): Observable<any> {
    return this.http.post(this.BirthCertificates + 'birth/approve', username);
  }

}
