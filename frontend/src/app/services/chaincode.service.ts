import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { InitiateChaincode } from 'app/models/chaincode';

@Injectable({
  providedIn: 'root'
})
export class ChaincodeService {
  baseUrl = 'http://localhost:4000/';
  channel = 'mychannel';

  constructor(private http: HttpClient) { }

  getChaincodeFiles(): Observable<any> {
    return this.http.get(this.baseUrl + 'chaincodefiles');
  }

  installChaincode(data): Observable<any> {
    return this.http.post(this.baseUrl + 'chaincodes', data);
  }

  initiateChaincode(data: InitiateChaincode): Observable<any> {
    return this.http.post(this.baseUrl + 'channels/mychannel/chaincodes', data);
  }

  listChaincodes(): Observable<any> {
    console.log('--------------- List Chaincode ----------------');
    return this.http.get(this.baseUrl + 'chaincodes/' + this.channel + '?peer=peer0.org1.example.com');
  }
}
