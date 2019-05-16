import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { InitiateChaincode } from 'app/models/chaincode';

@Injectable({
  providedIn: 'root'
})
export class ChaincodeService {

  constructor(private http: HttpClient) { }
  getChaincodeFiles(): Observable<any>{
    console.log("--------Getting Data in Service--------------------");
    return this.http.get('http://localhost:4000/chaincodefiles');
  }

  installChaincode(data):Observable<any>{
    return this.http.post('http://localhost:4000/chaincodes',data);
  }

  initiateChaincode(data:InitiateChaincode):Observable<any>{
    return this.http.post('http://localhost:4000/channels/mychannel/chaincodes',data);
  }
}
